import { SUBTLE }     from '@palett/presets'
import { DecoString } from '@spare/deco-string'
import { test }       from 'node:test'
import { says }       from '../index.js'

const list = [
  [ 'Charles Dickens', 'A Tale of Two Cities', '1859', 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.' ],
  [ 'Charles Dickens', 'Great Expectations ', '1861', 'My father\'s family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.' ],
  [ 'Emily Bronte', 'Wuthering Heights ', '1847', 'I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with.' ],
  [ 'F. Scott Fitzgerald', 'The Great Gatsby', '1925', 'In my younger and more vulnerable years my father gave me some advice that I\'ve been turning over in my mind ever since.' ],
  [ 'Franz Kafka', 'The Metamorphosis', '1915', 'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.' ],
  [ 'Fyodor Dostoevski', 'Crime and Punishment ', '1866', 'On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge.' ],
  [ 'Fyodor Dostoevski', 'The Brothers Karamazov ', '1880', 'Alexey Fyodorovitch Karamazov was the third son of Fyodor Pavlovitch Karamazov, a landowner well known in our district in his own day, and still remembered among us owing to his tragic and obscure death, which happened exactly thirteen years ago, and which I shall describe in its proper place.' ],
  [ 'Fyodor Dostoevsky', 'Crime and Punishment', '1866', 'On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge.' ],
  [ 'Gabriel García Márquez', 'One Hundred Years of Solitude', '1967', 'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.' ],
  [ 'George Orwell', '1984', '1949', 'It was a bright cold day in April, and the clocks were striking thirteen.' ],
  [ 'Herman Melville', 'Moby-Dick', '1851', 'Call me Ishmael.' ],
  [ 'Honore de Balzac', 'Pere Goriot ', '1835', 'At the end of the month of September, 1819, a young man, equipped as a law student, was to be seen entering the lodging-house kept by Madame Vauquer, in the Place Nodier, and betaking himself to the second floor to take possession of a room which had been let to him by the hour.' ],
  [ 'Honore de Balzac', 'Lost Illusions ', '1837', 'In the month of March, 1821, a young man, named Lucien Chardon, but who for the past two years had called himself de Rubempré, was returning on foot from the little town of Marsac to Angoulême, where he lived with his mother.' ],
  [ 'Honoré de Balzac', 'Père Goriot', '1835', 'Madame Vauquer, née de Conflans, is an elderly person, who for the past forty years has kept a lodging-house in the Rue Neuve-Sainte-Geneviève, in the district that lies between the Latin Quarter and the Faubourg Saint-Marcel.' ],
  [ 'Jane Austen', 'Pride and Prejudice ', '1813', 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.' ],
  [ 'Jane Austen', 'Emma ', '1815', 'Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.' ],
  [ 'Leo Tolstoy', 'Anna Karenina ', '1877', 'Happy families are all alike; every unhappy family is unhappy in its own way.' ],
  [ 'Leo Tolstoy', 'War and Peace ', '1869', 'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don\'t tell me that this means war, if you still try to defend the infamies and horrors perpetuated by that Antichrist—I really believe he is Antichrist—I will have nothing more to do with you and you are no longer my friend, no longer my \'faithful slave,\' as you call yourself! But how do you do? I see I have frightened you—sit down and tell me all the news.' ],
  [ 'Marcel Proust', 'Swann\'s Way', '1913', 'For a long time I used to go to bed early.' ],
  [ 'Mark Twain', 'The Adventures of Huckleberry Finn ', '1884', 'You don\'t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that\'s all right, because that book was made by Mr. Mark Twain, and he told the truth, mainly.' ],
  [ 'Virginia Woolf', 'Mrs. Dalloway', '1925', 'Mrs. Dalloway said she would buy the flowers herself.' ],
]

const decoString = DecoString({ thres: 84, pres: SUBTLE })
test('writer quotes', () => {
  says['Charles Dickens'](decoString('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.'))
  says['Charles Dickens'](decoString('My father\'s family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.'))
  says['Emily Bronte'](decoString('I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with.'))
  says['F. Scott Fitzgerald'](decoString('In my younger and more vulnerable years my father gave me some advice that I\'ve been turning over in my mind ever since.'))
  says['Franz Kafka'](decoString('As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.'))
  says['Fyodor Dostoevski'](decoString('On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge.'))
  says['Fyodor Dostoevski'](decoString('Alexey Fyodorovitch Karamazov was the third son of Fyodor Pavlovitch Karamazov, a landowner well known in our district in his own day, and still remembered among us owing to his tragic and obscure death, which happened exactly thirteen years ago, and which I shall describe in its proper place.'))
  says['Gabriel García Márquez'](decoString('Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'))
  says['George Orwell'](decoString('It was a bright cold day in April, and the clocks were striking thirteen.'))
  says['Herman Melville'](decoString('Call me Ishmael.'))
  says['Honore de Balzac'](decoString('At the end of the month of September, 1819, a young man, equipped as a law student, was to be seen entering the lodging-house kept by Madame Vauquer, in the Place Nodier, and betaking himself to the second floor to take possession of a room which had been let to him by the hour.'))
  says['Honore de Balzac'](decoString('In the month of March, 1821, a young man, named Lucien Chardon, but who for the past two years had called himself de Rubempré, was returning on foot from the little town of Marsac to Angoulême, where he lived with his mother.'))
  says['Honoré de Balzac'](decoString('Madame Vauquer, née de Conflans, is an elderly person, who for the past forty years has kept a lodging-house in the Rue Neuve-Sainte-Geneviève, in the district that lies between the Latin Quarter and the Faubourg Saint-Marcel.'))
  says['Jane Austen'](decoString('It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'))
  says['Jane Austen'](decoString('Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.'))
  says['Leo Tolstoy'](decoString('Happy families are all alike; every unhappy family is unhappy in its own way.'))
  says['Leo Tolstoy'](decoString('Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don\'t tell me that this means war, if you still try to defend the infamies and horrors perpetuated by that Antichrist—I really believe he is Antichrist—I will have nothing more to do with you and you are no longer my friend, no longer my \'faithful slave,\' as you call yourself! But how do you do? I see I have frightened you—sit down and tell me all the news.'))
  says['Marcel Proust'](decoString('For a long time I used to go to bed early.'))
  says['Mark Twain'](decoString('You don\'t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that\'s all right, because that book was made by Mr. Mark Twain, and he told the truth, mainly.'))
  says['Virginia Woolf'](decoString('Mrs. Dalloway said she would buy the flowers herself.'))
})

