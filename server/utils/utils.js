const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash, plaintext) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString() == plaintext;
};

const checkstrIncludes = (check,str) => {
    let sameCountCheck = 0;
    for(let i=0;i<str.length;i++) {
        if(str[i] == check[sameCountCheck]) {
            sameCountCheck += 1;
            if(sameCountCheck === check.length)
                return true
        } else {
            sameCountCheck = 0;
        }
    }
    return false;
}

module.exports =  {checkstrIncludes,encrypt,decrypt};