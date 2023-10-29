import React from 'react';
import { Link } from 'react-router-dom';

const DropCatalog = () => {

    return (
        <>
            <div className="dropdown-content-catalog">
                <ul>
                  <li>
                    <Link to=''>Телефоны</Link>
                  </li>

                  <li>
                    <Link to=''>Компьютеры и комплектующие</Link>
                  </li>

                  <li>
                    <Link to=''>Смартфоны, планшеты</Link>
                  </li>

                  <li>
                    <Link to=''>Телевизоры, видео-техника</Link>
                  </li>

                  <li>
                    <Link to=''>Цифровое фото и видео</Link>
                  </li>

                  <li>
                    <Link to=''>Сетевое оборудование</Link>
                  </li>

                  <li>
                    <Link to=''>Расходные материалы</Link>
                  </li>

                  <li>
                    <Link to=''>Офисная техника</Link>
                  </li>

                </ul>
                
              </div>        
        </>
    )
}

export default DropCatalog;