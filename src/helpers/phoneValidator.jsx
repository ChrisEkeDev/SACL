export const isPhoneNumberValid = (phoneNumber) => {
    const regex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return regex.test(phoneNumber);
}
