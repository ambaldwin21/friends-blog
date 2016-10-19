'use strict'

$(document).ready(() => {
  editUserListener()
  deleteUserListener()
})

function editUserListener(){
  $('#edit-user-btn').click((e) => {
    // console.log('clicked');
    e.preventDefault()
    const id = $(e.target).val()
    // console.log("id:", id);
    const first_name = $('#first_name').val().trim()
    const last_name = $('#last_name').val().trim()
    const image = $('#image').val().trim()
    const email = $('#email').val().trim()
    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify({id, first_name, last_name, image, email}),
    }).done(() => {
      window.location = '/users'
    }).fail(err => {
      window.location = '/users'
    })
  })
}

function deleteUserListener(){
  $('#delete-user-btn').click((e) => {
    e.preventDefault()
    console.log('delete was clicked!');
    let id = $('#delete-user-btn').data("userid")
    console.log("id:", id);
    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'DELETE',
    }).done(() => {
      window.location = '/users'
    }).fail(err => {
      console.log(err)
    })
  })
}
