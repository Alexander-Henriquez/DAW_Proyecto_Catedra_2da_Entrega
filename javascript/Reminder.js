// Función para agregar un recordatorio
function addReminder() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    if (date && time && message) {
        const reminder = {
            date,
            time,
            message
        };

        // Guardar el recordatorio en el almacenamiento local
        let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
        reminders.push(reminder);
        localStorage.setItem("reminders", JSON.stringify(reminders));

        // Mostrar el recordatorio como una tarjeta
        displayReminder(reminder, reminders.length - 1);

        // Limpiar los campos del formulario
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        document.getElementById("message").value = "";
    }
}

// Función para eliminar un recordatorio
function deleteReminder(index) {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders.splice(index, 1);
    localStorage.setItem("reminders", JSON.stringify(reminders));
    loadReminders(); // Recargar la lista de recordatorios
}

// Función para borrar todos los recordatorios
function clearReminders() {
    localStorage.removeItem("reminders");
    loadReminders(); // Recargar la lista de recordatorios
}

// Función para mostrar un recordatorio como una tarjeta con botones de eliminación
function displayReminder(reminder, index) {
    const remindersContainer = document.getElementById("reminders");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p><strong>Fecha:</strong> ${reminder.date}</p>
                     <p><strong>Hora:</strong> ${reminder.time}</p>
                     <p><strong>Mensaje:</strong> ${reminder.message}</p>
                     <button onclick="deleteReminder(${index})">Eliminar</button>`;
    remindersContainer.appendChild(card);
}

// Cargar los recordatorios al cargar la página
function loadReminders() {
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const remindersContainer = document.getElementById("reminders");
    remindersContainer.innerHTML = ""; // Limpiar la lista de recordatorios

    reminders.forEach((reminder, index) => {
        displayReminder(reminder, index);
    });
}

// Solicitar permisos de notificación si el navegador lo admite
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

loadReminders();