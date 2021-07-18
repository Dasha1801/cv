document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    // expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    // expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a target="_blank" href="skype:dasha1801">${data.skype}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D0%B1%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F-5a8b90184/">${data.linkedin}</a></li>`
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * self-education
 */

 let selfEducation = '';
 data.selfEducation.forEach(item => {
  selfEducation += `<li class="link"><a target="_blank" href="${item.link}">${item.course}</a></li>`;
 });
 document.querySelector('#self-education').innerHTML = selfEducation;
