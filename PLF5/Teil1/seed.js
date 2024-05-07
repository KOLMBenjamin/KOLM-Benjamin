const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDe } = require("@faker-js/faker");

async function seedDatabase() {
    try {
        const zoos = [];
        for (let i = 0; i < 5; i++) {
            const zoo = await prisma.zoo.create({
                data: {
                    land: fakerDe.fakerDE.location(),
                    Stadt: fakerDe.fakerDE.location(),
                    adresse: fakerDe.fakerDE.location.streetAddress(),
                    baujahr: fakerDe.fakerDE.date.past(),

                }
            });
            zoos.push(zoo);
        }
    }
    for (const zoo of zoos) {
        const abteilungCount = fakerDe.datatype.number({ min: 2, max: 7 });
        for (let i = 0; i < abteilungCount; i++) {
            await prisma.abteilung.create({
                data: {
                    name: fakerDe.fakerDE.animal.type(),
                    zooId: zoo.Id

                }
            });
        }
    }
    const abteilung = await prisma.abteilung.findMany();
    for (const abteilung of abteilungen) {
        const abteilungCount = fakerDe.datatype.number({ min: 5, max: 20 });
        for (let i = 0; i < tiercount; i++) {
            await prisma.tier.create({
                data: {
                    name: fakerDE.name.firstName(),
                    art: fakerDe.fakerDE.animal.type(),
                    abteilungId: abteilung.Id
                }
            });
        }
    }

    for (const mitarbeiter1 of mitarbeiter) {
        const abteilungen = await prisma.abteilung.findMany();
        const IwelcheAbteilungen = fakerDe.fakerDE.
        }

