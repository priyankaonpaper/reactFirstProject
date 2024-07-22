const Product = ()=> {
    return (
          <main className="item container">
            <div className="item-contant">
               <h1>YOUR FEET DESERVE THE BEST</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ex doloribus necessitatibus sint ea repellat modi est earum libero! Nemo odit, modi necessitatibus ipsa unde possimus corrupti qui nobis ea.</p>

               <div className="shopping">
                <button>Shop Now</button>
                <button className="but">Category</button>
               </div>

               <div className="item-also">
                <p>Also Avalable On</p>
                <img src="images/amazon.png" alt="amazon" />
                <img src="images/flipkart.png" alt="flipkart" />
               </div>
            </div>


             <div className="item-picture">
                <img src="images/productimg.png" alt="productimg" />
             </div>
          </main>
    );
};

export default Product;