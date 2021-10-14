import React, { useState } from 'react';//{useState}:hook
import './Directory_31.scss';
import MenuItem_31 from './MenuItem_31'
import items from './menu-item-data'

function Directory_31() {
  const [menuItems, setMenuItems] = useState(items);//陣列透過useState,[變數名稱],item資料存進變數裡面
  console.log('menuItems', menuItems) /* menuitem:陣列資料*/
  return (
    <div>
        <div className="directory-menu"> 
        {menuItems.map((item) => {                      /*{prop可自己定義}*/
          const { id, name, remoteUrl, size } = item;
          return(
            <MenuItem_31
            id={id} 
            name={name} 
            remoteUrl={remoteUrl}
            size={size}
            />
          );
        })}
        
        </div>
      </div>
  );
}

export default Directory_31;
