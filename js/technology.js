const travelBlogData = [
    {
        title: "OnePlus 11R and OnePlus Pad to launch on February 7th",
        postImage: "./images/technology/fea-27-12-1280-3c72b0ea3f.webp",
        content: `
        <p>OnePlus is all set to host a big launch on February 7th that includes many OnePlus devices. The OnePlus 11 is the limelight of the event but along with that, the OnePlus 11R and OnePlus’ very first tab, the OnePlus Pad is also launching. Last year, OnePlus launched its R version after three months after launching the OnePlus 10. </p>
        <p>OnePlus R versions are budget-friendly phones with high-end performance properties. Before any official information, the leaked configurations of the OnePlus 11R have surfaced on the internet but about the OnePlus Pad, there are no specifications online except for its design.</p>
        <h3>ONEPLUS 11R EXPECTED SPECIFICATIONS</h3>
        <p>OnePlus 11R could be powered by the Snapdragon 8+ Gen 1 processor. It might have the Adreno 730 for graphics. </p>
        <p>There are only renders on one storage variant which is 8GB RAM and 128GB storage and only one colour is expected yet; Galactic Silver.</p>
        <p>It is expected to feature a 6.7-inch AMOLED display with 120Hz refresh rate support. It may feature a 50-megapixel triple camera setup on the back. The OnePlus 11R will pack a 5000mAh battery with 100-watt fast charging support reportedly.</p>
        <h3>ONEPLUS PAD EXPECTED SPECIFICATIONS</h3>
        <p>The first tablet by OnePlus does not have many renders on the internet but some leaks reveal the design of the OnePlus Pad. It could feature a unibody metal chassis and slim equal bezels all around. </p>
        <p>The renders showed the OnePlus Pad in two colours green and black. It will feature an 11.6-inch display reportedly. The renders also show the volume rockers on the right side of the OnePlus Pad and there are some cutouts on the left as well. On the back, there is only one circular camera cutout but it's hard to tell how many cameras it is holding. </p>
        `,
        userId: 1,
        published: "Jan 03, 2023 02:41:00 PM"
    },
    {
        title: "Samsung is set to unveil next-gen camera technology & innovations",
        postImage: "./images/technology/featured-5-941b421aaf.webp",
        content: `
        <p>For the first time in three years, Samsung Electronics will host an in-person Galaxy Unpacked event in San Francisco on February 1st, starting at 11:30 PM IST. At the event, Samsung is set to introduce its latest addition to the Galaxy S series, a line of smartphones that brings premium quality and cutting-edge technology innovations every year.</p>
        <p>The new Galaxy S series is expected to be the epitome of Samsung's technological prowess, combining all of the company's strengths in hardware, software, and design. The new devices are poised to feature several innovations including superfast processors, cutting-edge performance capabilities and advanced display technology that will provide a premium experience for users. Furthermore, Samsung promises to wow users with amazing camera experiences on these upcoming flagships!</p>
        <p>On February 1 at Unpacked, we’ll show how innovation and sustainability working together bring the ultimate premium experience. At a time when the stakes are higher than ever, we’ve raised the bar by pushing boundaries for the mobile experience — delivering our most powerful mobile experiences you’ll continue to love for years to come,” said Dr TM Roh, President & Head of MX Business, Samsung Electronics, talking about the upcoming Galaxy S series phones.  </p>
        <h3>WATCH THE NEXT-GEN INNOVATION UNFOLD! </h3>
        <p>The Galaxy Unpacked 2023 promises to be an exciting one, and Samsung fans are eagerly waiting to see what the company has in store for them. You can be one of the first to see the new Galaxy innovations unveiled at the event. The Galaxy Unpacked 2023 will be live-streamed through samsung.com and Samsung’s YouTube channel.</p>
        `,
        userId: 2,
        published: "Jan 24, 2022 03:13:00 PM"
    },
    {
        title: "OptiPlex line-up of business-class desktops",
        postImage: "./images/technology/dell-cover-87c7394e42.webp",
        content: `
        <p>Desktops optimized for business users can add substantial productivity gains for users. Such workstations are designed and tested to deliver better and more reliable performance as compared to regular PCs, and thus free up professionals to focus on their business needs.</p>
        <p>Dell is renowned for offering some of the best end-to-end technology solutions to support businesses and help them grow confidently. Its OptiPlex Desktop range includes a variety of customization options and addresses all professional requirements. These desktops offer end-to-end security and easy scalability which are factors that become increasingly valuable for enterprises as they grow. </p>
        <p>But which OptiPlex Desktop should you buy? Let’s walk you through all the details that you should know to make an informed choice.</p>
        <h3>WHAT MAKES THE DELL OPTIPLEX DESKTOPS STAND OUT?</h3>
        <p>Dell’s OptiPlex range of desktops and all-in-one Pcs offer dependability, security, and easy scalability to business users. With Dell OptiPlex desktops seamlessly taking care of all technology needs, users can conveniently focus on things that matter and thus enhance their productivity. </p>
        <p>You can configure Dell OptiPlex laptops with extremely powerful 12th Gen Intel desktop processors and the latest connectivity options. Apart from powerful performance hardware, the OptiPlex range comes with smart features like Dell Optimizer 2.0 which uses artificial intelligence and machine learning to optimize the performance of crucial apps. </p>
        <p>For instance, if you are attending a video conference, Dell Optimizer 2.0 will allot maximum network bandwidth and remove background noise to improve communication. In fact, you can use the Dell Optimizer to deploy and manage not just one but your entire fleet of PCs. </p>
        `,
        userId: 1,
        published: "Jan 13, 2023 01:14:00 PM"
    },
    {
        title: "Apple planning to bring infinite track pad to MacBook, hints patent",
        postImage: "./images/technology/1280-720px-11-3e04f22dbd.webp",
        content: `
       <h3>HIGHLIGHTS</h3>
       <ul>
       <li>The other half of the Macbook could feature a glass body.</li>
       <li>The news leak on the patent confirms that Apple might be working on new touchpad features.</li>
       <li>This could look similar to the infinite trackpad on the Dell XPS 13 and LG Gram</li>
       <ul>
       <p>Apple has recently filed a patent related to the trackpad design with the US Patent & Trademark Office. This has been found by Patently Apple.</p>
       <p>With this patent, Apple is bringing a whole new addition to its MacBook. This could look similar to the infinite trackpad on the Dell XPS 13 and LG Gram Style which was displayed at CES 2023 recently.</p>
       <p>If this is to be believed, it would mean that the second half of the Macbook could feature a glass body. Additionally, this trackpad could come with many haptic engines which will allow mimicking a physical clickable feel. With this, a lot of functionalities can be introduced that will further enable the usability of the large-sized trackpad.</p>
        `,
        userId: 1,
        published: "Dec 26, 2022 01:44:00 PM"
    }
];

window.localStorage.setItem("travelblog", JSON.stringify(travelBlogData));

const getTravelBlog = () => travelblog = JSON.parse(window.localStorage.getItem("travelblog"));

const travelData = getTravelBlog();

displayBlog(travelData);
