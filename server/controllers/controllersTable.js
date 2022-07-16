const db = require("../db")
const { includes, equals, less, bigger } = require("../filter/filter")


class controllersTable {
  async getItem(req, res) {
    try {

      let { limit, page, filter, type, value } = req.query;

      console.log(value + ' value');

      if (!limit || !page) {
        res.status(400).json("Что-то пошло не так")
      } // если нет параметров лимит или пейдж отдаем ошибку


      else if (!value) {
        let arrayItem = await db.query(`SELECT * FROM welbexTable OFFSET ${limit * page} LIMIT ${limit};`)
        let allItem = await db.query(`SELECT * FROM welbexTable;`)
        let count = allItem.rowCount;
        let response = arrayItem.rows;
        // console.log(response);
        res.status(200).json({ data: response, count: count })
      } // при смене категории значение не отправляем, значит отдаем просто таблицу с пагинацией


      else {

        // CASE:
        // include - содержит
        // equal - равно
        // bigger - больше
        // less - меньше

        switch (type) {
          case "include": {
            let responseFilter = await includes(limit, page, filter, String(value))
            res.status(200).json(responseFilter)

            break;
          }
          case "equal": {
            let responseFilter = await equals(limit, page, filter, +value)
            res.status(200).json(responseFilter)


            break;
          }
          case "bigger": {
            console.log('here');
            let responseFilter = await bigger(limit, page, filter, +value)
            res.status(200).json(responseFilter)

            break;
          }

          case "less": {
            let responseFilter = await less(limit, page, filter, +value)
            res.status(200).json(responseFilter)

            break;
          }
          default: res.status(400).json("Что то точно пошло не так")
        }
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e)
    }
  }

}



module.exports = new controllersTable