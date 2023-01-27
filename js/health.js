const healthBlogData = [
    {
        title: "Get Your Vitamin P: Why Pleasure Matters When It Comes to What You Eat",
        postImage: "./images/health/pexels-nadin-sh-12918199.jpg",
        content: `
        <p>Nearly everyone has an answer to the question ‘what’s your favorite food?.’</p>
        <p>It’s easy to see why: humans are wired to derive pleasure from food. In fact, for many, eating ranks among the greatest pleasures in life!</p>
        <p>Besides making mealtimes an enjoyable experience, taking pleasure from food also has significant benefits for health. Savoring food supports digestion, can help improve your relationship with food, can help overcome disordered eating and more.</p>
        <p>In some cases, getting enough “vitamin P” (or perhaps vitamin mmmm) is just as important as the contents of your plate. Read on to dive into the tasty delights of why pleasure matters for food.</p>
        <h3>The psychology behind eating for pleasure</h3>
        <p>Over the years we have seen that most central governments maintain a good balance between social and economic objectives during the budget. So I don’t expect this year will be any different. The budget should largely be growth oriented to further the momentum of economic recovery.</p>
        <p>For years, researchers have studied the science behind eating for pleasure. Their findings are intriguing and largely encouraging.</p>
        <p>Physiologically, the pleasure people derive from food occurs both in our mouths and in our brains.</p>
        <p>“Pleasure of any kind, including pleasure from food, leads to a release of dopamine in the brain,” explains therapist, dietitian, and Certified Body Trust provider Aleta Storch, RDN, MHC, of Wise Heart Nutrition and Wellness.</p>
        `,
        userId: 1,
        published: "Jan 03, 2023 02:41:00 PM"
    },
    {
        title: "15 Staple Foods to Make Healthy Eating Easy All Week Long",
        postImage: "./images/health/pexels-viktoria-slowikowska-5677621.jpg",
        content: `
        <p>Nutritionists love to beat the meal-planning drum. I would know, I’m one of them!</p>
        <p>And while it is true that planning your meals in advance can help you eat healthier in the real world, pre-planning your family’s food isn’t always realistic.</p>
        <p>If you’d liketo eat well (but just haven’t yet mastered the art of meal planning with color-coded tabs and itemized Pinterest lists), simply stocking a healthy pantry can be a big step in the right direction.</p>
        <p>Want to make your kitchen a one-stop shop of mealtime building blocks? Look to these 15 good-for-you pantry, fridge, and freezer essentials.
        <h3>Canned chickpeas</h3>
        <h4>Prep suggestions</h4>
        <p>If you have a can of chickpeas, you have the makings of all sorts of dinners (and lunches too).

        Drain the can and pop the little legumes into soups or stews for extra protein and fiber. Or mash them with lemon juice, fresh dill, and diced celery as the filling for a wrap. Then, of course, there’s the world of chickpea cakes, chickpea tacos, and chickpea salads to choose from.</p>
        <h4>Save it for later</h4>
        <p>Leftover chickpeas can be kept in a sealed container in the refrigerator for up to a week, and can even be frozen. For best results, dry canned chickpeas as much as possible, then place them on a baking sheet in a single layer in the freezer. Once frozen, store them in a zip-top bag or other airtight container.</p>
        <h4>Health benefits</h4>
        <p>Despite their humble appearance, chickpeas are a veritable powerhouse of nutrition.

        One cupTrusted Source of the cooked beans contains 12.5 grams of fiber, 14.5 grams of protein, and just 4 grams of fat. They’re also quite high in manganese, which supports bone health, and folate, a B vitamin that helps create new cells and form DNA.</p>
        `,
        userId: 2,
        published: "Dev 22, 2022 03:13:00 PM"
    },
    {
        title: "The Definitive Guide to Healthy Eating in Real Life",
        postImage: "./images/health/pexels-đặng-thanh-tú-5659198.jpg",
        content: `
        <p>Depending on whom you ask, “healthy eating” may take any number of forms. It seems that everyone, including healthcare professionals, wellness influencers, coworkers, and family members, has an opinion on the healthiest way to eat.</p>
        <p>Plus, nutrition articles that you read online can be downright confusing with their contradictory — and often unfounded — suggestions and rules.</p>
        <p>Plus, nutrition articles that you read online can be downright confusing with their contradictory — and often unfounded — suggestions and rules.</p>
        <p>This doesn’t make it easy if you simply want to eat in a healthy way that works for you.</p>
        <p>The truth is, healthy eating doesn’t have to be complicated. It’s entirely possible to nourish your body while enjoying the foods you love.</p>
        <p>After all, food is meant to be enjoyed — not feared, counted, weighed, and tracked.</p>
        <p>This article cuts through the noise to explain what healthy eating means and how to make it work for you.</p>
        `,
        userId: 1,
        published: "Jan 02, 2023 01:14:00 PM"
    },
    {
        title: "Plant-based Protein: The Best, the Worst, and Everything In Between",
        postImage: "./images/health/pexels-marta-branco-1295572.jpg",
        content: `
       <p>All aboard the plant train! As we chug along into a new year, interest in plant-based protein shows no signs of slowing down.</p>
       <p>According to the International Food Information Council’s 2022 Food and Health Survey, 12 percent of Americans now follow a plant-based diet and 31 percent say they’ve been eating more food from whole-plant sources.</p>
       <p>Meanwhile, there’s no shortage of novel plant-forward protein sources to choose from, with new powders, milks, and meat substitutes emerging every month. And, of course, old standbys like beans, quinoa, and tofu are always available to add animal-free protein to your diet too.</p>
       <p>Considering leaning more on plants to fill you up, build your muscles, and even help you lose weight?</p>
       <p>Here’s an overview of the latest science behind plant-based proteins, when to use them, and why they make a difference to the environment and your health.</p>
       <h3>The science behind plant-based protein</h3>
       <p>When comparing plant-based protein to animal protein, there are plenty of factors to consider, from taste to cost. But if you’re turning to plants for a health purpose, it’s helpful to look at the science behind their benefits.</p>
        `,
        userId: 1,
        published: "Jan 23, 2023 01:44:00 PM"
    }
];

window.localStorage.setItem("healthblog", JSON.stringify(healthBlogData));

const getHealthBlog = () => finblog = JSON.parse(window.localStorage.getItem("healthblog"));

const healthData = getHealthBlog();

displayBlog(healthData);
