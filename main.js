const ul = document.getElementById('ayat');
const url = 'http://api.alquran.cloud/v1/surah/2?offset=0&limit=5';

fetch(url)
.then(response => response.json())
.then(function(data){
    data.data.ayahs.forEach(element => {
        var li = document.createElement("li");
        var ayahs_text = element.text;
        li.appendChild(document.createTextNode('('+element.numberInSurah+') '+ayahs_text));
        ul.appendChild(li);
        console.log(element.text)
    });
})

