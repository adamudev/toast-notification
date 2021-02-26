const btn = document.getElementById('btn');
const notificationContainer = document.getElementById('notifications');

btn.addEventListener('click', () => {
	createToastNotification();
});

function createToastNotification(){
	const notification = document.createElement('div');
	notification.classList.add('toast');

	notification.innerText = 'Task Completed!'

	notificationContainer.appendChild(notification);

	setTimeout(() => {
		notification.remove()
	}, 5000);
}