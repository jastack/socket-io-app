var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
  socket.emit('createMessage', {
    from: 'jen@example.com',
    text: 'Hey. This is James'
  })
})

socket.on('disconnect', () => {
  console.log('Disconnected from server');
})

socket.on('newMessage', (email) => {
  console.log('newMessage', email);
})
