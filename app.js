// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize = require('./util/database');

// const User = require('./models/User');
// var cors =require('cors');

// const app = express();

// app.use(cors());

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.post('/user/add-user',async (req,res,next) => {
    
//     const name = req.body.name;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     console.log(name, email, phone);

//     try {
//         console.log(name, email, phone);
//         const newUser = await User.create({ name, email, phone });
//         res.status(201).json({ newUserDetails: newUser });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'User creation failed' });
//       }
// }
//     )

// app.use(errorController.get404);

// sequelize
// .sync()
// .then(result =>{
//     app.listen(3000);
// })
// .catch(err =>{
// console.log(err);
// })


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const todo = require('./models/todo');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());



app.post('/add-todo', async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  console.log(req);


  try {
    const newTodo = await todo.create({ name, description });
    console.log(newTodo);
    res.status(201).json({ newTodo: newTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

app.get('/get-todo',async (req, res, next) => {
  try{
    const getTodo = await todo.findAll();
    res.status(200).json({allTodos: getTodo});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

// app.use(errorController.get404);

sequelize
  .sync({force:true})
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

