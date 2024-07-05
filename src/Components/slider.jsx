// src/components/Slider.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

const authors = [
  
    {
        name: 'J.K. Rowling',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_xJd2qUS0Rc8X1PRMVk12YTUOcj7lXlQYA&s',
        description: 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007. Along with the three companion books written for charity, the series has sold over 500 million copies, been translated into 80 languages, and made into eight blockbuster films. She has also written novels for adults, including The Casual Vacancy and, under the pseudonym Robert Galbraith, the Strike series.',
      },
      {
        name: 'Agatha Christie',
        image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-517399194.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
        description: 'Agatha Christie was an English writer known for her sixty-six detective novels and fourteen short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. Her works have been translated into at least 103 languages, and her books have sold more than two billion copies, making her one of the best-selling novelists of all time.',
      },
      {
        name: 'George R.R. Martin',
        image: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAyMTE5NTAzMzYwODI4NDg0/george-rr-martin-net-worth-george-r-r-martin-net-worth.jpg',
        description: 'George R.R. Martin is the author of the epic fantasy series A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones. He has written numerous novels and short stories, winning several awards for his work. Martin\'s intricate plots and richly developed characters have earned him a massive following.',
      },
      {
        name: 'Stephen King',
        image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-187751114.jpg',
        description: 'Stephen King is a prolific American author known for his horror, supernatural fiction, suspense, and fantasy novels. His books have sold more than 350 million copies, and many have been adapted into films, television series, and miniseries. Notable works include The Shining, It, and The Dark Tower series.',
      },
      {
        name: 'Neil Gaiman',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitNHkp-FVc4hbpsuYbqLDsDYCUlAp6sLlFAD4GUqHe6uaJVGxfuizcqNgk5xYCsxknyE_pO7vifDUFJ0Kd6COx77G0zK92tsBCRY-bO7vZHXJpVKSHOhYTSZ1ITCIZgD9BDvs8-u1EgeB0ZBJPfi4acuaIUn0z1TrLqkQgbBD6K0zud0K0Yj8/s4320/TourPhoto2022SMALL.jpg',
        description: 'Neil Gaiman is an English author of short fiction, novels, comic books, graphic novels, audio theatre, and films. His notable works include the comic book series The Sandman and novels such as Stardust, American Gods, and Good Omens. Gaiman\'s writing is known for its imaginative and fantastical elements.',
      },
      {
        name: 'Dan Brown',
        image: 'https://danbrown.com/wp-content/themes/danbrown/images/db/slideshow/author/db.courter.02.jpg',
        description: 'Dan Brown is an American author best known for his thriller novels, including the Robert Langdon series: Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno, and Origin. His novels are known for their complex plots, historical references, and exploration of cryptic symbols and codes.',
      },
      {
        name: 'J.R.R. Tolkien',
        image: 'https://www.wheaton.edu/media/migrated-images-amp-files/media/images/page20images/centers20and20institutes/wade20center/authors/JRRT-cont.jpg',
        description: 'J.R.R. Tolkien was an English writer, poet, philologist, and academic, best known for his high fantasy works The Hobbit and The Lord of the Rings. His work laid the foundation for modern fantasy literature, and he is often referred to as the "father" of the fantasy genre.',
      },
      {
        name: 'Arthur Conan Doyle',
        image: 'https://thedailygardener.org/wp-content/uploads/2023/10/Arthur-Conan-Doyle-Colorized-Portrait-BEF-1904.jpg',
        description: 'Arthur Conan Doyle was a British writer and physician, most famous for creating the detective Sherlock Holmes. Doyle\'s Sherlock Holmes stories have been adapted into numerous films, television series, and plays, making Holmes one of the most enduring and popular literary characters in history.',
      },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % authors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setIsOpen(true);
  };

  return (
    <div className="text-blue-dark py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Authors</h2>
        <div className="relative flex items-center justify-center">
          <div className="flex overflow-hidden">
            {authors.map((author, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-40 h-40 transform ${index === currentIndex ? 'scale-105' : 'scale-95'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleAuthorClick(author)}
              >
                <div className="relative w-full h-full overflow-hidden clip-hexagon">
                  <img src={author.image} alt={author.name} className="object-cover w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded shadow-lg">
          <Dialog.Title className="text-2xl font-bold mb-4">{selectedAuthor?.name}</Dialog.Title>
          <Dialog.Description className="whitespace-pre-line">{selectedAuthor?.description}</Dialog.Description>
          <button onClick={() => setIsOpen(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Slider;
