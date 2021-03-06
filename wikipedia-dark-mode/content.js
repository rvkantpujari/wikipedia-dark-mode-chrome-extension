chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) 
{
    if(msg.darkMode === true)
        window.location.reload();
    else if(msg.darkMode === false)
        wikiGoDark();
}

function wikiGoDark() {
    document.body.style.backgroundColor = "#000";

    let pTags = document.getElementsByTagName('p');
    for(et of pTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let divTags = document.getElementsByTagName('div');
    for(et of divTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let spanTags = document.getElementsByTagName('span');
    for(et of spanTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let aTags = document.getElementsByTagName('a');
    for(et of aTags) {
        et.style.color = 'skyblue';
        et.style.backgroundColor = "#000";
    }

    let h1 = document.getElementsByTagName('h1');
    for(et of h1) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let h2 = document.getElementsByTagName('h2');
    for(et of h2) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let h3 = document.getElementsByTagName('h3');
    for(et of h3) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let h4 = document.getElementsByTagName('h4');
    for(et of h4) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let liTags = document.getElementsByTagName('li');
    for(et of liTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let labelTags = document.getElementsByTagName('label');
    for(et of labelTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let tableTags = document.getElementsByTagName('table');
    for(et of tableTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let thTags = document.getElementsByTagName('th');
    for(et of thTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let trTags = document.getElementsByTagName('tr');
    for(et of trTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let tdTags = document.getElementsByTagName('td');
    for(et of tdTags) {
        et.style.color = '#fff';
        et.style.backgroundColor = "#000";
    }

    let input = document.getElementsByTagName('input')
    for(et of input) {
        et.style.backgroundColor = "#fff";
    }
}