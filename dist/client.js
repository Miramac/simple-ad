"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const ldapjs_1 = __importDefault(require("ldapjs"));
/**
 * Creates a new LDAP client
 * @class Client
 */
class Client {
    constructor(options) {
        _password.set(this, void 0);
        this.url = options.url;
        this.username = options.username;
        __classPrivateFieldSet(this, _password, options.password);
        this.baseDN = options.baseDN;
    }
    /**
     * Bind to the LDAP Server
     */
    bind() {
        return new Promise((resolve, reject) => {
            this.ldapClient = ldapjs_1.default.createClient({
                url: this.url
            });
            this.ldapClient.bind(this.username, __classPrivateFieldGet(this, _password), async (err) => {
                if (err) {
                    await this.unbind();
                    return reject(err);
                }
                resolve();
            });
        });
    }
    /**
     * Unbind the connection
     */
    unbind() {
        return new Promise((resolve, reject) => {
            this.ldapClient.unbind((err) => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
    /**
     * Perform a LDAP search: http://ldapjs.org/client.html#search
     * @param dn
     * @param options
     */
    search(dn, options) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.bind();
            }
            catch (e) {
                return reject(e);
            }
            this.ldapClient.search(dn, options, (err, res) => {
                if (err) {
                    console.log('List groups error:', err);
                    return reject(err);
                }
                var entries = [];
                res.on('searchEntry', (entry) => {
                    entries.push(entry);
                });
                const done = async () => {
                    try {
                        await this.unbind();
                    }
                    catch (e) {
                        return reject(e);
                    }
                    if (entries.length === 0)
                        return resolve([]);
                    var result = entries.map(function (e) { return e.object; });
                    resolve(result);
                };
                res.on('error', async (err) => {
                    if (err.message === 'Size Limit Exceeded')
                        return done();
                    try {
                        await this.unbind();
                    }
                    catch (e) {
                        reject(e);
                    }
                    reject(err);
                });
                res.on('end', done);
            });
        });
    }
    /**
     * Find Group objects
     * @param dn
     * @param attributes
     */
    async findGroup(dn, attributes) {
        const opts = {
            scope: 'sub',
            filter: '(&(objectclass=group))',
            attributes: attributes
        };
        return await this.search(dn, opts);
    }
    /**
     * Check if entry is member in group
     * @param groupDN
     * @param member
     */
    async isGroupMember(groupDN, member) {
        const opts = {
            scope: 'sub',
            filter: `(&(objectclass=group)(member=${member}))`,
            attributes: ['cn']
        };
        const results = await this.search(groupDN, opts);
        return (results.length > 0);
    }
    /**
     * Add or delete group member
     * @param groupDN
     * @param member
     * @param operation
     */
    async modifyGroupMember(groupDN, member, operation) {
        member = (!Array.isArray(member)) ? [member] : member;
        const change = new ldapjs_1.default.Change({
            operation: operation,
            modification: {
                member: member
            }
        });
        return new Promise(async (resolve, reject) => {
            try {
                await this.bind();
            }
            catch (e) {
                return reject(e);
            }
            this.ldapClient.modify(groupDN, change, async (err) => {
                try {
                    await this.unbind();
                }
                catch (e) {
                    reject(e);
                }
                if (err && err.name !== 'EntryAlreadyExistsError') {
                    return reject(err);
                }
                resolve();
            });
        });
    }
    /**
     * Delete one group member
     * @param groupDN
     * @param member
     */
    async addGroupMember(groupDN, member) {
        return this.modifyGroupMember(groupDN, member, 'add');
    }
    /**
     * Add one group member
     * @param groupDN
     * @param member
     */
    async deleteGroupMember(groupDN, member) {
        // Check is is member in group
        if (await this.isGroupMember(groupDN, member)) {
            return this.modifyGroupMember(groupDN, member, 'delete');
        }
        else {
            return null;
        }
    }
}
exports.Client = Client;
_password = new WeakMap();
