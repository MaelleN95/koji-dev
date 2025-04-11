document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('K7EI2w-nsmCesghO_');

  const form = document.getElementById('contact-form');
  const loader = document.getElementById('form-loader');
  const submitBtn = document.querySelector('.submit-btn');
  const submitBtnText = submitBtn.querySelector('.submit-btn-text');
  const submitBtnIcon = document.getElementById('submit-btn-icon');

  const iconContent = (state) => {
    if ((state = 'check')) {
      submitBtnIcon.innerHTML = `<lord-icon
        src="https://cdn.lordicon.com/lomfljuq.json"
        trigger="in"
        state="in-check"
        colors="primary:#1e293b"
      </lord-icon>`;
    } else if ((state = 'cross')) {
      submitBtnIcon.innerHTML = `<lord-icon
        src="https://cdn.lordicon.com/zxvuvcnc.json"
        trigger="in"
        state="in-cross"
        colors="primary:#1e293b"
      </lord-icon>`;
    }
  };

  const showIcon = (state) => {
    submitBtnText.textContent = '';
    loader.classList.add('hidden');
    iconContent(state);
    submitBtnIcon.classList.remove('hidden');
  };

  const handleResponse = (success) => {
    const state = success ? 'check' : 'cross';
    showIcon(state);
    form.reset();
  };

  const resetButton = () => {
    setTimeout(() => {
      submitBtnIcon.classList.add('hidden');
      submitBtnText.classList.remove('hidden');
      submitBtnText.textContent = 'Envoyer';
      submitBtn.disabled = false;
    }, 3000);
  };

  const loadingState = () => {
    loader.classList.remove('hidden');
    submitBtnText.classList.add('hidden');
    submitBtn.disabled = true;
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    loadingState();

    emailjs
      .sendForm('service_ax7cobd', 'template_fnrj9wl', this)
      .then(() => {
        handleResponse(true);
      })
      .catch((error) => {
        handleResponse(false);
      })
      .finally(() => {
        resetButton();
      });
  });
});
