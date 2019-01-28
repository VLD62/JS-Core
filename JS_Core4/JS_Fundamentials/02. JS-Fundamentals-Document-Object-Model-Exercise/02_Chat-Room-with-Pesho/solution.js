function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            let divEvelement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pElement = document.createElement('p');
            let senderBtn = event.target.name;
            if (senderBtn === 'myBtn') {
                spanElement.textContent = 'Me';
                pElement.textContent = document.getElementById('myChatBox').value;
                divEvelement.style.textAlign = 'left';
            } else if (senderBtn === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                pElement.textContent = document.getElementById('peshoChatBox').value;
                divEvelement.style.textAlign = 'right';
            }
            divEvelement.appendChild(spanElement);
            divEvelement.appendChild(pElement);
            document.getElementById('chatChronology').appendChild(divEvelement);
            inputFields[0].value = "";
            inputFields[1].value = "";
        });
    });
    let inputFields = Array.from(document.getElementsByTagName('input'));
}