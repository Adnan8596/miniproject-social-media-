// const socket = io('/community');

// const communityId = document.querySelector('#community-id').textContent;
// const input1 = document.querySelector('#in1');
// const input2 = document.querySelector('#in2');
// const form = document.querySelector('#form');

// console.log(communityId)
// socket.on('connect', () => {
//     socket.emit('community-join',{
//         joinId:communityId
//     })
// })
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     socket.emit('community-newMsg', {
//         name:input1.value,
//         text:input2.value,
//         id:communityId
//     })
// })
// socket.on('community-msg', (msg) => {
//     console.log(msg)
// })
const socket = io('/community');

const communityId = document.querySelector('#community-id').textContent;
const username = document.querySelector('#user-name').textContent;
const form = document.querySelector('.msg-form');
const input = document.querySelector('input');

socket.on('connect', () => {
    socket.emit('community-join',{
        joinId:communityId
    })
})

form.addEventListener('submit', e => {
    e.preventDefault();

    socket.emit('community-newMsg', {
        name:username,
        text:input.value,
        id:communityId
    })
    input.value = '';
})
socket.on('community-msg', (msg) => {
    $('.chat-container').append(`<div class='msg-container'>
    <div class='from'>${msg.name}</div>
    <div class='msg'>${msg.text}</div>
    </div>`)
})

