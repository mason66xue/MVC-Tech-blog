const deletePostHandlebar = async(event) => {
    console.log('clicked',event)
    event.preventDefault();
    const postId= document.getElementById('post-id')

    fetch('/api/post/'+ postId.value,{
        method: 'delete'
    })
    .then(function(){
        document.location.replace('/dashboard');
    })
    .catch(err=> {
        console.error(err);
    });
} 

document.querySelector('#delete-btn').addEventListener('click',deletePostHandlebar);