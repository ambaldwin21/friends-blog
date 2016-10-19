'use strict'

$(document).ready(() => {
  editUserListener()
  deleteUserListener()
  editPostListener()
  deletePostListener()
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
    // console.log('delete was clicked!');
    let id = $('#delete-user-btn').data("userid")
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

function editPostListener(){
  $('#edit-post-btn').click((e) => {
    e.preventDefault()
    console.log('clicked');
    const id = $(e.target).val()
    console.log('id:', id);
    const title = $('#title').val().trim()
    const body = $('#body').val().trim()
    $.ajax({
      contentType: 'application/json',
      url: `/posts/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify({id, title, body}),
    }).done(() => {
      window.location = '/posts'
    }).fail(err => {
      window.location = '/posts'
    })
  })
}

function deletePostListener(){
  $('#delete-post-btn').click((e) => {
    e.preventDefault()
    console.log('delete was clicked!');
    let id = $('#delete-post-btn').data("postid")
    $.ajax({
      contentType: 'application/json',
      url: `/posts/${id}`,
      method: 'DELETE',
    }).done(() => {
      window.location = '/posts'
    }).fail(err => {
      console.log(err)
    })
  })
}
