exports.getAll90sDomains = async (req, res) => {
    try {
        const allDomains = [
            {
                name: "World Wide Web",
                year: 1991,
                domain: "https://web.archive.org/web/20130430143157/http://info.cern.ch/hypertext/WWW/TheProject.html",
            },
            {
                name: "Yahoo",
                year: 1994,
                domain: "https://web.archive.org/web/20050307162243/https://kottke.org/plus/misc/yahoo-1994/",
            },
            {
                name: "Microsoft",
                year: 1994,
                domain: "https://web.archive.org/web/20140811022456/http://www.microsoft.com/en-us/discover/1994/",
            },
            {
                name: "Kodak",
                year: 1996,
                domain: "https://web.archive.org/web/19961108211744/http://www2.kodak.com:80/",
            },
            {
                name: "Atlanta Olympic Games",
                year: 1996,
                domain: "https://web.archive.org/web/19961223003700/http://www.atlanta.olympic.org:80/",
            },
            {
                name: "Oracle",
                year: 1996,
                domain: "https://web.archive.org/web/19961219131225/http://www.oracle.com:80/",
            },
            {
                name: "Disney Store",
                year: 1996,
                domain: "https://web.archive.org/web/19961218212740/http://store.disney.com/",
            },
            {
                name: "McDonald's",
                year: 1996,
                domain: "https://web.archive.org/web/19961110083459/http://www.mcdonalds.com/",
            },
            {
                name: "MIT",
                year: 1996,
                domain: "https://web.archive.org/web/19961224024947/http://web.mit.edu:80/",
            },
            {
                name: "NASA",
                year: 1997,
                domain: "https://web.archive.org/web/19970605230559/http://www.nasa.gov:80/",
            },
            {
                name: "Hotmail",
                year: 1997,
                domain: "http://web.archive.org/web/19971210171246/http://hotmail.com:80/",
            },
            {
                name: "Electonic Arts",
                year: 1997,
                domain: "https://web.archive.org/web/19970221233250/http://www.ea.com/",
            },
            {
                name: "Adobe",
                year: 1997,
                domain: "https://web.archive.org/web/19970625023120/http://www.adobe.com/",
            },
            {
                name: "McAfee",
                year: 1997,
                domain: "https://web.archive.org/web/19970707093449/http://www.mcafee.com:80/",
            },
            {
                name: "Google",
                year: 1998,
                domain: "https://web.archive.org/web/19981202230410/http://www.google.com/",
            },
            {
                name: "Apple",
                year: 1998,
                domain: "https://web.archive.org/web/19980509035420/http://www.apple.com:80/",
            },
            {
                name: "Microsoft",
                year: 1998,
                domain: "https://web.archive.org/web/19981205060735/http://microsoft.com:80/",
            },
            {
                name: "Sony Classical",
                year: 1998,
                domain: "https://web.archive.org/web/19980525062302/http://www.sonyclassical.com:80/",
            },
            {
                name: "Fifa World Cup",
                year: 1998,
                domain: "https://web.archive.org/web/19990117021251/http://france98.com/",
            },
            {
                name: "Cartoon Network",
                year: 1999,
                domain: "https://web.archive.org/web/19991012123959/http://cartoonnetwork.com/",
            },
            {
                name: "KFC",
                year: 1999,
                domain: "https://web.archive.org/web/19991013103743/http://kfc.com:80/",
            },
            {
                name: "ABC News",
                year: 1999,
                domain: "https://web.archive.org/web/19990428185649/http://abcnews.go.com:80/",
            },
            {
                name: "Britannica",
                year: 1999,
                domain: "https://web.archive.org/web/19991117143507/http://britannica.com/",
            },
            {
                name: "Linux",
                year: 1999,
                domain: "https://web.archive.org/web/19991109195228/http://www.linux.org/",
            },
        ];

        return res.status(200).json({
            success: true,
            data: allDomains,
        });
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: "Can't fetch all-domains.",
            error: err.message,
        });
    }
};
