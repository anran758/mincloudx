import './baas';
import { createIo } from '../src';

// 使用
const io = createIo({ tables: ['product'] });

io.product.create({ name: 'New Product', price: 100 });
io.product.update('recordId', { price: 110 });
io.product.delete('recordId');
