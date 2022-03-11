const Types = require('../models/facility_type')
const Sports = require('../models/sports_type')
const Facility = require('../models/facility')
const landMark = require('../models/landmar')
const Review = require('../models/review');
const mongoose = require('mongoose');
var pagesBar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.bar = (req, res, next) => {
    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesBar.forEach(page => {
            newPage.push(page + 10)
        })
        pagesBar = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesBar.forEach(page => {
            newPage.push(page - 10)
        })
        pagesBar = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000

                }
            },
            property_type: 'Bar'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'bar',
                background_image: './images/Bar.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesBar,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}
var pagesClubs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.clubs = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesClubs.forEach(page => {
            newPage.push(page + 10)
        })
        pagesClubs = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesClubs.forEach(page => {
            newPage.push(page - 10)
        })
        pagesClubs = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000

                }
            },
            property_type: 'Club'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'clubs',
                background_image: './images/clubs.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesClubs,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })





}
var pagesGym = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.gym = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesGym.forEach(page => {
            newPage.push(page + 10)
        })
        pagesGym = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesGym.forEach(page => {
            newPage.push(page - 10)
        })
        pagesGym = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000

                }
            },
            property_type: 'Gym'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'gym',
                background_image: './images/gym.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesGym,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })
}

exports.home = (req, res, next) => {
    Types.find({})
        .then(types => {
            res.render('home.ejs', {
                pageTitle: 'home',
                types: types
            })
        })
        .catch(err => console.error(err))

}
var pagesHospital = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.hospital = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesHospital.forEach(page => {
            newPage.push(page + 10)
        })
        pagesHospital = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesHospital.forEach(page => {
            newPage.push(page - 10)
        })
        pagesHospital = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000

                }
            },
            property_type: 'Hospital'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'hospital',
                background_image: './images/hospital.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesHospital,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}
var pagesHotel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.hotel = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesHotel.forEach(page => {
            newPage.push(page + 10)
        })
        pagesHotel = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesHotel.forEach(page => {
            newPage.push(page - 10)
        })
        pagesHotel = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Hotel'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'hotel',
                background_image: './images/hotel .jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesHotel,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })
}
var pagesMall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.mall = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesMall.forEach(page => {
            newPage.push(page + 10)
        })
        pagesMall = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesMall.forEach(page => {
            newPage.push(page - 10)
        })
        pagesMall = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Mall'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'mall',
                background_image: './images/mall.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesMall,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}
var pagesMultilplex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.multiplex = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesMultilplex.forEach(page => {
            newPage.push(page + 10)
        })
        pagesMultilplex = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesMultilplex.forEach(page => {
            newPage.push(page - 10)
        })
        pagesMultilplex = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'multiplex'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'multiplex',
                background_image: './images/multiplex.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesMultilplex,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })


}
var pagesPark = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.park = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesPark.forEach(page => {
            newPage.push(page + 10)
        })
        pagesPark = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesPark.forEach(page => {
            newPage.push(page - 10)
        })
        pagesPark = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Park'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'park',
                background_image: './images/park (2).jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesPark,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}
var pagesRestaurant = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.restaurants = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesRestaurant.forEach(page => {
            newPage.push(page + 10)
        })
        pagesRestaurant = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesRestaurant.forEach(page => {
            newPage.push(page - 10)
        })
        pagesRestaurant = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Restaurant'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'restaurants',
                background_image: './images/restaurants.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesRestaurant,
                next: nextPage,
            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })
}
var pagesSports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.sports = (req, res, next) => {

    Sports.find()
        .then(sports => {

            res.render('sports.ejs', {
                pageTitle: 'sports',
                sports: sports
            })
        })
        .catch(err => { console.error(err); })

}
var pagesStreetFood = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.street_food = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesStreetFood.forEach(page => {
            newPage.push(page + 10)
        })
        pagesStreetFood = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesStreetFood.forEach(page => {
            newPage.push(page - 10)
        })
        pagesStreetFood = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Street Food'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'restaurants',
                pageTitle: 'street_food',
                background_image: './images/street-food.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesStreetFood,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}

var pagesYoga = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.yoga = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesYoga.forEach(page => {
            newPage.push(page + 10)
        })
        pagesYoga = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesYoga.forEach(page => {
            newPage.push(page - 10)
        })
        pagesYoga = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Yoga'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'yoga',
                background_image: './images/yoga (3).jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesYoga,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })
}
var pagesDance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.dance = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesDance.forEach(page => {
            newPage.push(page + 10)
        })
        pagesDance = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesDance.forEach(page => {
            newPage.push(page - 10)
        })
        pagesDance = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Dance Club'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'dance',
                background_image: './images/dance.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesDance,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })



}
var pagesGame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.game = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesGame.forEach(page => {
            newPage.push(page + 10)
        })
        pagesGame = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesGame.forEach(page => {
            newPage.push(page - 10)
        })
        pagesGame = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Game'
        }).sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'game',
                background_image: './images/game_parlour.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesGame,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })


}
var pagesCooking = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.cooking = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesCooking.forEach(page => {
            newPage.push(page + 10)
        })
        pagesCooking = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesCooking.forEach(page => {
            newPage.push(page - 10)
        })
        pagesCooking = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Cooking Class'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'cooking',
                background_image: './images/cooking.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesCooking,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}
var pagesAmusement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.amusement = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesAmusement.forEach(page => {
            newPage.push(page + 10)
        })
        pagesAmusement = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesAmusement.forEach(page => {
            newPage.push(page - 10)
        })
        pagesAmusement = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Amusement Park'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'cooking',
                pageTitle: 'amusement',
                background_image: './images/amusement.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesAmusement,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })


}
var pagesBanquet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.banquet = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesBanquet.forEach(page => {
            newPage.push(page + 10)
        })
        pagesBanquet = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesBanquet.forEach(page => {
            newPage.push(page - 10)
        })
        pagesBanquet = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Banquet Hall'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'banquet',
                background_image: './images/banquet.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesBanquet,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })



}
var pagesZoo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exports.zoo = (req, res, next) => {

    const pageNumber = Number(req.query.page)
    const nextPage = pageNumber + 1
    const row = req.query.row

    if ((pageNumber - 1) % 10 == 0 && pageNumber != 1 && row == 'next') {
        console.log('this is the increment condition')
        newPage = []
        pagesZoo.forEach(page => {
            newPage.push(page + 10)
        })
        pagesZoo = newPage
    }
    if ((pageNumber) % 10 == 0 && pageNumber != 1 && row == 'prev') {
        console.log('this is the decrement condition')
        newPage = []
        pagesZoo.forEach(page => {
            newPage.push(page - 10)
        })
        pagesZoo = newPage
    }
    Facility.find({
            location: {
                $near: {
                    $geometry: {
                        type: "point",
                        coordinates: [req.session.LMLong, req.session.LMLatd]
                    },
                    $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                }
            },
            property_type: 'Zoo'
        })
        .sort('rating')
        .skip((pageNumber - 1) * 18)
        .limit(18)
        .exec()
        .then(facilities => {
            res.render('facility.ejs', {
                pageTitle: 'banquet',
                pageTitle: 'zoo',
                background_image: './images/zoo.jpg',
                result: facilities,
                currPage: pageNumber,
                hasPrevious: pageNumber,
                hasNext: Math.ceil(facilities.length / 18),
                pages: pagesZoo,
                next: nextPage,

            })


        })
        .catch(err => {
            res.render('500.ejs');
            console.error(err)
        })

}

exports.item = (req, res, next) => {

    res.render('facility_item.ejs', {
        pageTitle: 'item',
        background_image: './images/item.jpg'
    })
}

exports.details = (req, res, next) => {
    Facility.find({
            title: req.params.propName
        })
        .then(facility => {
            if (facility.length > 0) {
                const Mainfacility = facility[0];
                Facility.find({
                    location: {
                        $near: {
                            $geometry: {
                                type: "point",
                                coordinates: [req.session.LMLong, req.session.LMLatd]
                            },
                            $maxDistance: 100 * 1000 //since the distance should be in metres and we are searching for props within 100 km of the landmark

                        }
                    },
                    property_type: Mainfacility.property_type
                })

                .exec()
                    .then(facilities => {
                        fetchReviews(Mainfacility, facilities, res)
                    })
            } else {
                res.render('500.ejs');
            }
        })
        .catch(err => {
            res.render('500.ejs');
            console.log(err)
        })

}

exports.addReview = (req, res, next) => {
    const key = Object.keys(req.body)[1];
    const rating = parseFloat(req.body[key]);
    console.log(typeof(rating))
    Review.find({
            user: req.session.userId,
            facility: req.params.facility
        })
        .then(reviews => {
            if (reviews.length > 0) {
                updateReview(req.session.userId, req.params.facility, rating, req.body.content, res);

            } else {

                Facility.find({ title: req.params.facility })
                    .then(facility => {
                        facility = facility[0];
                        newRating(facility.title, rating);
                        const review = new Review({
                            content: req.body.content,
                            rating: rating,
                            user: mongoose.Types.ObjectId(req.session.userId),
                            facility: facility.title,

                        })
                        return review.save()
                    })
                    .then(result => {
                        //console.log(result);
                        res.redirect(`/details/${req.params.facility}`)
                    })
                    .catch(err => {
                        console.log(err)
                        res.render('500.ejs');
                    })
            }
        })


}

async function updateReview(userId, facility, rating, review, res) {
    try {

        const updateReview = await Review.findOneAndUpdate({ user: userId, facility: facility }, {
            rating: rating,
            content: review
        }, { new: true })
        await updateReview.save();
        const ratings = await Review.find({ facility: facility })
        const count = ratings.length;
        let sum = 0;
        ratings.forEach(rating => {
            sum += rating.rating;
        })

        const avg = (parseFloat(sum).toFixed(1) / parseFloat(count).toFixed(1)).toFixed(1);
        const result = await Facility.findOneAndUpdate({ title: facility }, { rating: avg }, { new: true });
        await result.save();
        res.redirect(`/details/${facility}`)
    } catch (err) {
        console.log(err);
        res.render('500.ejs')
    }
}
//this funnction will be used to update the average rating of the user
async function newRating(facTitle, newRating) {
    const ratings = await Review.find({ facility: facTitle })
    const count = ratings.length;
    let sum = 0;
    ratings.forEach(rating => {
        sum += rating.rating;
    })
    sum += newRating;
    const avg = (parseFloat(sum).toFixed(1) / parseFloat(count + 1).toFixed(1)).toFixed(1);
    const result = await Facility.findOneAndUpdate({ title: facTitle }, { rating: avg }, { new: true });
    await result.save()
}

//this function will return a list of all the reviews related to the facility
function fetchReviews(mainFacility, facilities, res) {
    Review.find({ facility: mainFacility.title })
        .populate('user', { name: 1 })
        .then(reviews => {
            //console.log(reviews)
            facilities = facilities.filter(facility => {
                return facility.title != mainFacility.title
            })
            res.render('detail.ejs', {
                pageTitle: 'details', //modify this to prop title
                facility: mainFacility,
                facilities: facilities,
                reviews: reviews
            })

        })
        .catch(err => {
            console.log(err);
            res.render('500.ejs')

        })
}

exports.search = async(req, res, next) => {
    const value = req.body.val;
    try {
        const result = await Facility.find({
            title: value
        })
        if (result.length > 0) {
            res.redirect(`/details/${result[0].title}`)
        } else {
            const words = value.split(' ');

            words.forEach(word => {
                if (word == 'Bar' || word == 'bar') {
                    res.redirect('/bar?page=1&row=nan')
                } else if (word == 'Club' || word == 'club') {
                    res.redirect('/clubs?page=1&row=nan')
                } else if (word == 'dance' || word == 'Dance')
                    res.redirect('/dance?page=1&row=nan')
                else if (word == 'amusement' || word == 'Amusement')
                    res.redirect('/amusement?page=1&row=nan')
                else if (word == 'banquet' || word == 'Banquet' || word == 'hall' || word == 'Hall')
                    res.redirect('/banquet?page=1&row=nan')
                else if (word == 'Zoo' || word == 'zoo')
                    res.redirect('/zoo?page=1&row=nan')
                else if (word == 'Gym' || word == 'gym')
                    res.redirect('/gym?page=1&row=nan')
                else if (word == 'Hospital' || word == 'hospital' || word == 'aspatal' || word == 'Aspatal')
                    res.redirect('/hospital?page=1&row=nan')
                else if (word == 'Game' || word == 'game')
                    res.redirect('/game?page=1&row=nan')
                else if (word == 'Hotel' || word == 'hotel')
                    res.redirect('/hotel?page=1&row=nan')
                else if (word == 'Mall' || word == 'mall' || word == 'shopping' || word == 'Shopping' || word == 'complex' || word == 'Complex')
                    res.redirect('/mall?page=1&row=nan')
                else if (word == 'Multiplex' || word == 'multiplex' || word == 'Cinema' || word == 'cinema' || word == 'Picture' || word == 'picture')
                    res.redirect('/multiplex?page=1&row=nan')
                else if (word == 'Park' || word == 'park' || word == 'garden' || word == 'Garden')
                    res.redirect('/park?page=1&row=nan')
                else if (word == 'Restaurant' || word == 'restaurant' || word == 'restra' || word == 'restarant')
                    res.redirect('/restaurants?page=1&row=nan')
                else if (word == 'Street Food' || word == 'street food' || word == 'StreetFood' || word == 'Streetfood' || word == 'streetFood' || word == 'streetFood' || word == 'thela' || word == 'Thela')
                    res.redirect('/street_food?page=1&row=nan')
                else if (word == 'Yoga' || word == 'yoga')
                    res.redirect('/yoga?page=1&row=nan')
                else if (word == 'Cooking Class' || word == 'cooking class' ||
                    word == 'cooking' || word == 'Cooking')
                    res.redirect('/cooking?page=1&row=nan')
                else if (word == 'sports' || word == 'Sports' || word == 'Sport' || word == 'sport' || word == 'khel' || word == 'kood')
                    res.redirect('/sports')

                else if (word == 'Badminton' || word == 'badminton' || word == 'batminton')
                    res.redirect('/badminton?page=1&row=nan')
                else if (word == 'Basketball' || word == 'basketball' || word == 'basket' || word == 'Basket')
                    res.redirect('/basketball?page=1&row=nan')
                else if (word == 'Cricket' || word == 'cricket' || word == 'bat' || word == 'Bat')
                    res.redirect('/cricket?page=1&row=nan')
                else if (word == 'Football' || word == 'football' || word == 'foot' || word == 'Foot')
                    res.redirect('/football?page=1&row=nan')
                else if (word == 'Tennis' || word == 'tennis')
                    res.redirect('/tennis?page=1&row=nan')
                else if (word == 'Baseball' || word == 'baseball' || word == 'base' || word == 'Base')
                    res.redirect('/baseball?page=1&row=nan')
                else if (word == 'Golf' || word == 'golf')
                    res.redirect('/golf?page=1&row=nan')
                else if (word == 'Hockey' || word == 'hockey')
                    res.redirect('/hockey?page=1&row=nan')
                else if (word == 'karate' || word == 'Karate' || word == 'judo' || word == 'Judo' || word == 'judoKarate' || word == 'JudoKarate')
                    res.redirect('/karate?page=1&row=nan')
                else if (word == 'KickBoxing' || word == 'kickBoxing' || word == 'kick' || word == "Kick")
                    res.redirect('/kick_boxing?page=1&row=nan')
                else if (word == 'Rugby' || word == 'rugby' || word == 'rughby' || word == 'Rughby')
                    res.redirect('/rugby?page=1&row=nan')
                else if (word == 'Skating' || word == 'skating' || word == 'skate' || word == 'Skate')
                    res.redirect('/skating?page=1&row=nan')
                else if (word == 'Snooker' || word == 'snooker' || word == 'billiards' || word == 'Billiards')
                    res.redirect('/snooker?page=1&row=nan')
                else if (word == 'Squash' || word == 'squash')
                    res.redirect('/squash?page=1&row=nan')
                else if (word == 'Swimming' || word == 'swimming' || word == 'Swim' || word == 'swim')
                    res.redirect('/swimming?page=1&row=nan')
                else if (word == 'Volleyball' || word == 'volleyball' || word == 'Volley' || word == 'volley')
                    res.redirect('/volleyball?page=1&row=nan')
                else if (word == 'Boxing' || word == 'boxing' || word == 'Box' || word == 'box')
                    res.redirect('/boxing?page=1&row=nan')
                else if (word == 'Archery' || word == 'archery' || word == 'bow' || word == 'arrow' || word == 'Bow' || word == 'Arrow' || word == 'Bow&Arrow')
                    res.redirect('/archery?page=1&row=nan')
                else if (word == 'TableTennis' || word == 'pingPong' || word == 'pingpong' || word == 'tt' || word == 'TT')
                    res.redirect('/table_tennis?page=1&row=nan')
                else if (word == 'Bowling' || word == 'bowling' || word == "bowl" || word == 'Bowl')
                    res.redirect('/bowling?page=1&row=nan')
                else if (word == 'cycling' || word == 'Cycling' || word == 'Cycle' || word == 'cycle')
                    res.redirect('/cycling?page=1&row=nan')


            })
        }
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

}