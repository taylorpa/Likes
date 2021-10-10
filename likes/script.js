var likeCount = [9, 12, 9];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function likes(id) {
    likeCount[id]++;
    spans[id].innerHTML = likeCount[id] + " like(s)"
}