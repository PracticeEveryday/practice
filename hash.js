const crypto = require('crypto');

// 비밀번호를 hash하는 방법
/*
  비밀번호 같은 데이터는 보통 단방향 암호화 알고리즘을 사용해서 암호화한다.

  단방향 암호화란 암호화된 문자열을 다시 원래 문자로 복호화를 할 수 없는 암호화다.

  다시 복호화할 수 없어서 해시 함수라고 부르기도 한다.  
*/

const salt = crypto.randomBytes(128).toString('base64'); // String 값!!
// 암호학에서 솔트(salt)는 데이터, 비밀번호, 통과암호를 해시 처리하는 단방향 함수의 추가 입력으로 사용되는 랜덤 데이터이다. 
console.log("salt : ",salt)
let inputPassword = 123

const hashPassword = crypto
.createHash('sha512')
.update(inputPassword + salt)
.digest('hex');
console.log("salt 더한 hash 값", hashPassword);

/*
  const crypto = require('crypto');

  const a = crypto.createHash('알고리즘').update('변환할 문자열').digest('인코딩');

  알고리즘엔 md5, sha1, sha256, sha512 등을 사용할 수 있고,

  인코딩엔 base64, hex, latin1을 사용할 수 있다.
*/

const hash2 = crypto.createHash('sha1').update('inputPassword').digest("hex")
console.log("hash2 값 : ", hash2)


const pw = 'password';

const hash = {
  md5_base64 : crypto.createHash('md5').update(pw).digest('base64'),
  md5_hex : crypto.createHash('md5').update(pw).digest('hex'),
  // crypto.해쉬 만들어라 sha256방식으로 업데이트해라 String pw를 인코딩은 base64방법이다!  
  sha256_base64 : crypto.createHash('sha256').update(pw).digest('base64'),
  sha256_hex : crypto.createHash('sha256').update(pw).digest('hex'),
  
  sha512_base64 : crypto.createHash('sha512').update(pw).digest('base64'),
  sha512_hex : crypto.createHash('sha512').update(pw).digest('hex')
}

let key = Object.keys(hash);
console.log(key)
for (key in hash) {
  console.log(`${key} \t : \t ${hash[key]}`);
}
