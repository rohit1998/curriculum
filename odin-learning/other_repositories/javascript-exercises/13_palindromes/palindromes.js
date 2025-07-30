const palindromes = function (candidate) {
    const filtered = candidate.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
    const n = filtered.length;
    for (let i=0;i<(n-1)/2;i++){
        if (filtered[i]!==filtered[n-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
