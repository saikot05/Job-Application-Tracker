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
const filteredSection = document.getElementById('filtered-section');




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

    if (id === 'interview-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    } else if (id === 'all-btn') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }

}
mainContainer.addEventListener('click', function(event) {
    // console.log(event.target.classList.contains('btn-success'));
    if (event.target.classList.contains('btn-success')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.type').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            position,
            salary,
            type: 'INTERVIEW',
            description
        }

        const companyExists = interviewList.find(item => item.companyName === cardInfo.companyName);

        if (!companyExists) {
            interviewList.push(cardInfo)
        }

        calculateCount();
        renderInterview();

    } else if (event.target.classList.contains('btn-error')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.type').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            position,
            salary,
            type: 'REJECTED',
            description
        }

        const companyExists = rejectedList.find(item => item.companyName === cardInfo.companyName);

        if (!companyExists) {
            rejectedList.push(cardInfo)
        }

        calculateCount();

        renderRejected();

    }
});

function renderInterview() {
    filteredSection.innerHTML = '';
    for (let interview of interviewList) {

        let div = document.createElement('div');
        div.className = 'card grid grid-cols-[5fr_1fr] justify-between items-start bg-base-100 shadow rounded-xl p-5 mb-4';
        div.innerHTML = `<div class="space-y-6">
                    <div>
                        <h2 class="company-name text-2xl font-bold text-[#002C5C]">${interview.companyName}</h2>
                        <p class="position text-[#64748B]">${interview.position}</p>
                    </div>
                    <div>
                        <p class="salary text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div>
                        <p class="type inline-block bg-blue-100 px-4 py-1 text-[#002C5C] ">${interview.type}</p>
                        <p class="description text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>`
        filteredSection.appendChild(div);
    }
}

function renderRejected() {
    filteredSection.innerHTML = '';
    for (let rejected of rejectedList) {

        let div = document.createElement('div');
        div.className = 'card grid grid-cols-[5fr_1fr] justify-between items-start bg-base-100 shadow rounded-xl p-5 mb-4';
        div.innerHTML = `<div class="space-y-6">
                    <div>
                        <h2 class="company-name text-2xl font-bold text-[#002C5C]">${rejected.companyName}</h2>
                        <p class="position text-[#64748B]">${rejected.position}</p>
                    </div>
                    <div>
                        <p class="salary text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div>
                        <p class="type inline-block bg-blue-100 px-4 py-1 text-[#002C5C] ">${rejected.type}</p>
                        <p class="description text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>`
        filteredSection.appendChild(div);
    }
}