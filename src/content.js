function generateHome() {
  const content = document.querySelector("#content");
  content.innerHTML = `<section id="landing" class="sectionContainer">
  <div class="">
    <div class="">
      <h1>Steak as it was meant to be</h1>
      <p>
        We are a locally owned and operated smokehouse located in the heart
        of Old Strathcona. <br />An authentic BBQ experience with homemade
        sauces, savoury sides, and a casual welcoming room to indulge.
        Brisket, beer, and bourbon - keeping it simple, and doing it well.
      </p>
      <button class="mainBtn">Check our menu</button>
    </div>
    <div class="">
      <img src="./main.jpg" alt="" />
    </div>
  </div>
</section>

<section id="schedule" class="sectionContainer">
  <div class="">
  <div class="">
    <p>10323 78 Ave NW, Edmonton, AB T6E 1N8, Canada</p>
    <img src="./open.jpg" alt="" />
  </div>
    <div class="">
      <h2>Hours</h2>
      <div class="line"></div>
      <p class="workingHours">
        Sunday: 8am - 8pm
        <br>
        Monday: 6am - 6pm
        <br>
        Tuesday: 6am - 6pm
        <br>
        Wednesday: 6am - 6pm
        <br>
        Thursday: 6am - 10pm
        <br>
        Friday: 6am - 10pm
        <br>
        Saturday: 8am - 10pm
      </p>
    </div>
  </div>
   </section>`;

  return content;
}

function generateMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = `<section id="menu" class="sectionContainer">
  <div class="">
    <div class="">
      <div class="category">
      <h3 class="categoryTitle">Appetizers</h3>
      
      <div class="menuItem">
        <div>
          <h3 class="itemName">Chef's special bread preparation</h3>
          <p class="itemDescription">Anything really</p>
          <h4 class="itemPrice">$3.50</h4>
        </div>
        <div class="itemImg">
          <img src="./images/bread.jpg" alt="">
        </div>
      </div>
      
      <div class="menuItem">
        <div>
          <h3 class="itemName">ROASTED ONION SOUP</h3>
          <h4 class="itemPrice">$6.40</h4>
        </div>
        <div class="itemImg">
          <img src="./images/onion soup.jpg" alt="">
        </div>
      </div>

      <div class="menuItem">
        <div>
          <h3 class="itemName">COLOSSAL CRAB CAKE</h3>
          <h4 class="itemPrice">$7.30</h4>
        </div>
        <div class="itemImg">
          <img src="./images/crab cake.jpg" alt="">
        </div>
      </div>

      <div class="menuItem">
        <div>
          <h3 class="itemName">CRISPY CALAMARI</h3>
          <h4 class="itemPrice">$7</h4>
        </div>
        <div class="itemImg">
          <img src="./images/crispy calamari.jpg" alt="">
        </div>
      </div>


      </div>

      <div class="category">
        <h3 class="categoryTitle">Steaks & chops</h3>
        
        <div class="menuItem">
          <div>
            <h3 class="itemName">SIRLOIN 16oz</h3>
            <p class="itemDescription">sEASONED WITH A SPECIAL BLEND OF HERBS
              AND SPICES</p>
            <h4 class="itemPrice">$14.50</h4>
          </div>
          <div class="itemImg">
            <img src="./images/sirloin.jpg" alt="">
          </div>
        </div>

        <div class="menuItem">
          <div>
            <h3 class="itemName">FILET MIGNON 10oz</h3>
            <h4 class="itemPrice">$20.10</h4>
          </div>

        
          <div class="itemImg">
            <img src="./images/mignon.jpg" alt="">
          </div>
        </div>


        <div class="menuItem">
          <div>
            <h3 class="itemName">PRIME RIB ON THE BONE</h3>
            <h4 class="itemPrice">$7.30</h4>
          </div>


          <div class="itemImg">
            <img src="./images/rib.jpg" alt="">
          </div>
        </div>

        <div class="menuItem">
          <div>
            <h3 class="itemName">THE GOTHAM RIB STEAK ON THE BONE 24oz</h3>
            <h4 class="itemPrice">$30</h4>
          </div>


          <div class="itemImg">
            <img src="./images/gotham.jpg" alt="">
          </div>
        </div>

        </div>
    </div>

    <div class="dashedLine"></div>

    <div class="">
      <div class="category">
      <h3 class="categoryTitle">Salads</h3>
      <div class="menuItem">
        <div>
          <h3 class="itemName">OLD HOMESTEAD CAESAR</h3>
          <p class="itemDescription">PARMESAN CROUTONS, CLASSIC DRESSING</p>
          <h4 class="itemPrice">$6.80</h4>
        </div>
        <div class="itemImg">
          <img src="./images/salad.jpg" alt="">
        </div>
      </div>
      <div class="menuItem">
        <div>
          <h3 class="itemName">HOMESTEAD CHOPPED</h3>
          <p class="itemDescription">TOMATO, ONION, MUSHROOM, PEPPERS,
            HARICOT VERTS, BLACK OLIVES, CRUMBLED
            BLUE CHEESE AND BASIL VINAIGRETTE</p>
          <h4 class="itemPrice">$8.30</h4>
        </div>
        <div class="itemImg">
          <img src="./images/homestead.jpg" alt="">
        </div>
      </div>
      </div>
      <div class="category">
        <h3 class="categoryTitle">Beverages</h3>
        <div class="menuItem">
          <div>
            <h3 class="itemName">Soft drinks</h3>
            <h4 class="itemPrice">$1</h4>
          </div>
          <div class="itemImg">
            <img src="./images/soft drinks.jpg" alt="">
          </div>
        </div>

        <div class="menuItem">
          <div>
            <h3 class="itemName">Corona beer</h3>
            <h4 class="itemPrice">$3</h4>
          </div>
          <div class="itemImg">
            <img src="./images/corona.jpg" alt="">
          </div>
        </div>

        <div class="menuItem">
          <div>
            <h3 class="itemName">GAFFEL KÖLSCH</h3>
            <p class="itemDescription">Delicately bitter, pleasant, and slightly hoppy taste. Brewed according to a time-honored family recipe and the German Purity Law of 1516.</p>
            <h4 class="itemPrice">$8</h4>
          </div>
          <div class="itemImg">
            <img src="./images/gaffel.jpg" alt="">
          </div>
        </div>

        <div class="menuItem">
          <div>
            <h3 class="itemName">ERDINGER HEFE WEISSBIER DARK</h3>
            <p class="itemDescription">A refreshingly rich, smooth weissbier with a full-bodied flavor. Fine hops and dark malts contribute to its spicy flavor.</p>
            <h4 class="itemPrice">$8</h4>
          </div>
          <div class="itemImg">
            <img src="./images/erdinger.jpg" alt="">
          </div>
        </div>

        <div class="menuItem">
          <div>
            <h3 class="itemName">SAMUEL SMITH NUT BROWN ALE </h3>
            <p class="itemDescription">Walnut-like color and palate of hazelnuts. Wonderful balance of roasted crystal malt and aromatic hops.</p>
            <h4 class="itemPrice">$8</h4>
          </div>
          <div class="itemImg">
            <img src="./images/samuel smith.jpg" alt="">
          </div>
        </div>

        </div>
    </div>
  </div>
</section>`;

  return content;
}

function generateContact() {
  const content = document.querySelector("#content");
  content.innerHTML = `   <section id="contact" class="sectionContainer">
  <div>

    <div class="contactImg">
      <img src="./images/contact.jpg" alt="">
    </div>

    <div class="">
     <h3>We are waiting for you at</h3>
     <h2>10323 78 Ave NW, Edmonton, AB T6E 1N8, Canada</h2>
     <p>Reservations at (250) 555-0199</p>
    <button class="mainBtn">Open location in google maps</button>
    </div>
  </div>

</section>`;

  return content;
}

export { generateHome, generateMenu, generateContact };
