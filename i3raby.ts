const AboutMe: any = {}

const calculateTheAge = (date: Date) => {
    const BirthDate = new Date(date);
    let Age = new Date().getFullYear() - BirthDate.getFullYear();
    const Month = new Date().getMonth() - BirthDate.getMonth();
    if(Month < 0 || (Month == 0 && new Date().getDate() < BirthDate.getDate())) Age--;
    return Age;
}

AboutMe.age = calculateTheAge(new Date('01/07/2006'));
AboutMe.nickname = 'TOBZi';
AboutMe.firstName = 'Muhammed';
AboutMe.middleName= 'Ahmed Muhammed';
AboutMe.lastName = 'Arabi';
AboutMe.birthDate = '07/01/2006';
AboutMe.accounts = {
    discord: 'i3raby',
    x: 'i3rabyx',
    instagram: 'i3raby'
}

console.log(AboutMe);
