import { faker } from '@faker-js/faker';
export function generateFakeValue(type: string): any {
  switch (type) {
    // 🧑 Identity / User
    case 'firstName': return faker.person.firstName();
    case 'lastName': return faker.person.lastName();
    case 'middleName': return faker.person.middleName();
    case 'fullName': return faker.person.fullName();
    case 'gender': return faker.person.sex();
    case 'jobTitle': return faker.person.jobTitle();
    case 'jobType': return faker.person.jobType();
    case 'bio': return faker.person.bio();

    // 🌍 Address / Location
    case 'street': return faker.location.streetAddress();
    case 'secondaryAddress': return faker.location.secondaryAddress();
    case 'buildingNumber': return faker.location.buildingNumber();
    case 'city': return faker.location.city();
    case 'state': return faker.location.state();
    case 'stateAbbr': return faker.location.state({ abbreviated: true });
    case 'country': return faker.location.country();
    case 'countryCode': return faker.location.countryCode();
    case 'zip': return faker.location.zipCode();
    case 'direction': return faker.location.direction();
    case 'timezone': return faker.location.timeZone();
    case 'coordinates': return { lat: faker.location.latitude(), lng: faker.location.longitude() };

    // 📦 Commerce / Business
    case 'product': return faker.commerce.product();
    case 'productName': return faker.commerce.productName();
    case 'productDescription': return faker.commerce.productDescription();
    case 'department': return faker.commerce.department();
    case 'price': return faker.commerce.price();
    case 'priceRange': return faker.commerce.price({ min: 5, max: 500 });
    case 'currency': return faker.finance.currencyCode();
    case 'creditCardNumber': return faker.finance.creditCardNumber();
    case 'iban': return faker.finance.iban();
    case 'bic': return faker.finance.bic();
    case 'transactionDescription': return faker.finance.transactionDescription();

    // 💻 Tech / Internet
    case 'email': return faker.internet.email();
    case 'username': return faker.internet.username();
    case 'password': return faker.internet.password();
    case 'url': return faker.internet.url();
    case 'domain': return faker.internet.domainName();
    case 'ip': return faker.internet.ip();
    case 'ipv6': return faker.internet.ipv6();
    case 'mac': return faker.internet.mac();
    case 'emoji': return faker.internet.emoji();

    // 📅 Dates / Time
    case 'date': return faker.date.anytime();
    case 'pastDate': return faker.date.past();
    case 'futureDate': return faker.date.future();
    case 'recentDate': return faker.date.recent();
    case 'birthdate': return faker.date.birthdate();
    case 'soonDate': return faker.date.soon();
    case 'month': return faker.date.month();
    case 'weekday': return faker.date.weekday();

    // 📝 Text / Content
    case 'word': return faker.lorem.word();
    case 'words': return faker.lorem.words(3);
    case 'sentence': return faker.lorem.sentence();
    case 'sentences': return faker.lorem.sentences(2);
    case 'paragraph': return faker.lorem.paragraph();
    case 'paragraphs': return faker.lorem.paragraphs(2);
    case 'slug': return faker.lorem.slug();

    // ⚙️ System / Misc
    case 'uuid': return faker.string.uuid();
    case 'nanoid': return faker.string.nanoid();
    case 'fileName': return faker.system.fileName();
    case 'fileType': return faker.system.fileType();
    case 'mimeType': return faker.system.mimeType();
    case 'semver': return faker.system.semver();
    case 'color': return faker.color.human();
    case 'rgb': return faker.color.rgb();
    case 'hex': return faker.internet.color();

    // 📞 Communication / Company
    case 'phone': return faker.phone.number();
    case 'phoneIMEI': return faker.phone.imei();
    case 'company': return faker.company.name();
    case 'catchPhrase': return faker.company.catchPhrase();
    case 'buzzword': return faker.company.buzzPhrase();

    // 🎥 Media
    case 'imageUrl': return faker.image.url();
    case 'avatar': return faker.image.avatar();
    case 'abstractImage': return faker.image.urlLoremFlickr({ category: 'abstract' });

    // 🔢 Numbers & Boolean
    case 'number': return faker.number.int({ min: 1, max: 100 });
    case 'float': faker.number.float({ min: 1, max: 100, fractionDigits: 2 });
    case 'boolean': return faker.datatype.boolean();

    // Default
    default: return null;
  }
}