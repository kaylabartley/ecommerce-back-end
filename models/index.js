// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
//which tags a single product has
Product.belongsToMany(Tag, {
  through: ProductTag, 
  as: 'tags',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
//which products have a particular tag
Tag.belongsToMany(Product, {
  through: ProductTag, 
  as: 'products',
  foreignKey: 'tag_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
