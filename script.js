// Switch livestream branches
function changeStream() {
  const select = document.getElementById("branchSelect");
  const videoId = select.value;
  document.getElementById("liveStream").src =
    `https://www.youtube.com/embed/${videoId}`;
}

// Search books in Bookshop
function searchBooks() {
  const query = document.getElementById("searchBooks").value.toLowerCase();
  const books = document.querySelectorAll("#bookList .card");
  books.forEach(book => {
    book.style.display = book.innerText.toLowerCase().includes(query) ? "block" : "none";
  });
}

// Paystack donation integration
const donationForm = document.getElementById("donationForm");
if (donationForm) {
  donationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const amount = document.getElementById("amount").value * 100; // kobo
    const purpose = document.getElementById("purpose").value;

    var handler = PaystackPop.setup({
      key: 'YOUR_PAYSTACK_PUBLIC_KEY',
      email: 'donor@example.com',
      amount: amount,
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1),
      metadata: { purpose: purpose },
      callback: function(response){
        alert('Payment successful! Ref: ' + response.reference);
      },
      onClose: function(){
        alert('Transaction cancelled.');
      }
    });
    handler.openIframe();
  });
}
// Search sermons
function searchSermons() {
  const query = document.getElementById("searchSermons").value.toLowerCase();
  const sermons = document.querySelectorAll("#sermonList .card");
  sermons.forEach(sermon => {
    sermon.style.display = sermon.innerText.toLowerCase().includes(query) ? "block" : "none";
  });
}
