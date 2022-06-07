const express = require('express');
const app = express();
const PORT = 8020;
const cors = require('cors');
const res = require('express/lib/response');

app.use(cors())

const familyNames = {
    'pedro':{
        'surname': 'comas',
        'birthPlace': 'Barranquilla',
        'relationship': 'yourself',
        'heigth': '175 cm' 
    },
    'piedad':{
        'surname': 'gomez',
        'birthPlace': 'Barranquilla',
        'relationship': 'mother',
        'heigth': '169 cm' 
    },
    'valentina':{
        'surname': 'comas',
        'birthPlace': 'Barranquilla',
        'relationship': 'sister',
        'heigth': '170 cm'
    },
    'erik':{
        'surname': 'comas',
        'birthPlace': 'Barranquilla',
        'relationship': 'brother',
        'heigth': '173 cm'
    },
    'lina':{
        'surname': 'gomez',
        'birthPlace': 'Cartagena',
        'relationship': 'cousin',
        'heigth': '160 cm'
    },
    'angelica':{
        'surname': 'gomez',
        'birthPlace': 'Cartagena',
        'relationship': 'cousin',
        'heigth': '165 cm'
    },
    'federico':{
        'surname': 'gomez',
        'birthPlace': 'Cartagena',
        'relationship': 'cousin',
        'heigth': '177 cm'
    },
    'danny':{
        'surname': 'murcia',
        'birthPlace': 'Cali',
        'relationship': 'cousin',
        'heigth': '175 cm'
    },
    'will':{
        'surname': 'altamiranda',
        'birthPlace': 'Florida',
        'relationship': 'cousin',
        'heigth': '169 cm'
    },
    'samantha':{
        'surname': 'altamiranda',
        'birthPlace': 'Florida',
        'relationship': 'cousin',
        'heigth': '165 cm'
    },
    'jesus':{
        'surname': 'romero',
        'birthPlace': 'Barraquilla',
        'relationship': 'cousin',
        'heigth': '177 cm'
    },
    'unknown':{
        'surname': 'unknown',
        'birthPlace': 'unknown',
        'relationship': `I don't know that guy`,
        'heigth': 'unknown'
    }

}

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (req,res)=>{
    const names = req.params.name.toLowerCase()
    if(familyNames[names]){
        console.log(familyNames[names])
        res.json(familyNames[names])
    }else{
        res.json (familyNames.unknown)
    }
})



app.listen (process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!.`)
})