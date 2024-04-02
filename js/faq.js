
const titles = document.querySelectorAll('.accordion__title');
const content = document.querySelectorAll('.accordion__content');

	titles.forEach(item => item.addEventListener('click', () => {
			const activeContent = document.querySelector('#' + item.dataset.tab);

			if (activeContent.classList.contains('active')) {
				activeContent.classList.remove('active');
				item.classList.remove('active');
				activeContent.style.maxheight = 0;
			} else {
				content.forEach(element => {
					element.classList.remove('active');
					element.style.maxHeight = 0;
				});

				titles.forEach(element => element.classList.remove('active'));

				item.classList.add('active');
				activeContent.classList.add('active');
				activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
			}
	}))

	document.querySelector('[date-tab="tab-3"]').classList.add('active');
	document.querySelector('#tab-3').classList.add('active');
	document.querySelector('#tab-3').style.maxHeight = document.querySelector('#tab-3').scrollHeight + 'px';