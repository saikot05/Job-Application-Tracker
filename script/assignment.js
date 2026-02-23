let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const allCardSection = document.getElementById('all-card');
const mainContainer = document.querySelector('main');
console.log(mainContainer);



function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

function toggleStyle(id) {
    allBtn.classList.remove('btn-info');
    interviewBtn.classList.remove('btn-info');
    rejectedBtn.classList.remove('btn-info');

    if (id === 'all-btn') {
        allBtn.classList.add('btn-info');
    } else if (id === 'interview-btn') {
        interviewBtn.classList.add('btn-info');
    } else if (id === 'rejected-btn') {
        rejectedBtn.classList.add('btn-info');
    }

}

mainContainer.addEventListener('click', function(event) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const status = parentNode.querySelector('.status').innerText;

});