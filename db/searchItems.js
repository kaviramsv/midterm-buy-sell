const connectionToDB = require("./connection");

const searchItems = (user_id,category_id,max,min) => {
  const queryParams = [];

  let queryString = `SELECT * FROM items WHERE 1=1 `;
  if (user_id) {
    queryParams.push(`${user_id}`);
    queryString += ` AND owner_id !=  $${queryParams.length}`;
  }
  if (category_id) {
    if(category_id<4){
    queryParams.push(`${category_id}`);
    queryString += ` AND category_id=  $${queryParams.length}`;
   }
  }
  if (max) {
    queryParams.push(`${max*100}`);
    queryString += ` AND price_in_cents <= $${queryParams.length}`;
  }
  if (min) {
    queryParams.push(`${min*100}`);
    queryString += ` AND price_in_cents >= $${queryParams.length}`;
  }
  console.log(queryString);
  return connectionToDB.query(queryString, queryParams)
  .then((res) => {
        console.log(res.rows);
        return res.rows;

      });
    };


module.exports = {
  searchItems,
};
