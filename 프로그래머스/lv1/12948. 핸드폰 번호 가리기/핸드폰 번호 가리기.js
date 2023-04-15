function solution(phone_number) {
    const replace = phone_number
        .substring(0, phone_number.length - 4)
        .replaceAll(/\d/g, "*");
    const original = phone_number.substring(phone_number.length - 4);

    return (replace + original);
}