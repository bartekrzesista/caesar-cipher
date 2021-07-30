export default function caesar13(message) {
    try {
        if(typeof message != 'string' || message === '') throw new Error('Nieprawidłowe dane wejściowe');

        const messageArr = message.split('');
        const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        const result = messageArr.map((e) => {
            const alphabet = e === e.toUpperCase() ? upperCaseAlphabet : lowerCaseAlphabet;
            if(alphabet.includes(e)) {
                const index = alphabet.indexOf(e);
                let shift = 13;
                if(index >= 13) {
                    shift = index%13;
                    return alphabet[shift];
                }
                return alphabet[index+shift];
            }

            return e;

        }).join('');

        return result;

     } catch(e) {
        console.log(e.message);
    }
}