import { test } from 'node:test'
import { $ }    from '../index.js'

test('writer works', () => {
  console.log($['Charles Dickens']('works')['Oliver Twist'](1838)['A Christmas Carol'](1843)['David Copperfield'](1850)['Great Expectations'](1861)['Bleak House'](1853))
  console.log($['Leo Tolstoy']('works')['War and Peace'](1869)['Anna Karenina'](1877)['The Death of Ivan Ilyich'](1886)['Resurrection'](1899))
  console.log($['Herman Melville']('works')['Moby-Dick'](1851)['Bartleby,the Scrivener'](1853)['Billy Budd,Sailor'](1924))
  console.log($['Franz Kafka']('works')['The Metamorphosis'](1915)['The Trial'](1925)['The Castle'](1926))
  console.log($['Jane Austen']('works')['Pride and Prejudice'](1813)['Sense and Sensibility'](1811)['Emma'](1815)['Persuasion'](1818))
  console.log($['Gabriel García Márquez']('works')['One Hundred Years of Solitude'](1967)['Love in the Time of Cholera'](1985)['Chronicle of a Death Foretold'](1981))
  console.log($['F. Scott Fitzgerald']('works')['The Great Gatsby'](1925)['Tender Is the Night'](1934)['This Side of Paradise'](1920))
  console.log($['George Orwell']('works')['1984'](1949)['Animal Farm'](1945)['Homage to Catalonia'](1938)['Down and Out in Paris and London'](1933))
  console.log($['Honoré de Balzac']('works')['Père Goriot'](1835)['Eugénie Grandet'](1833)['Lost Illusions'](1837)['Cousin Bette'](1846))
  console.log($['Fyodor Dostoevsky']('works')['Crime and Punishment'](1866)['The Brothers Karamazov'](1880)['The Idiot'](1869)['Notes from Underground'](1864))
  console.log($['Virginia Woolf']('works')['Mrs. Dalloway'](1925)['To the Lighthouse'](1927)['Orlando'](1928)['A Room of One\'s Own'](1929))
  console.log($['Marcel Proust']('works')['In Search of Lost Time'](1913)['Within a Budding Grove'](1919)['The Guermantes Way'](1920))
  console.log($['Mark Twain']('works')['The Adventures of Tom Sawyer'](1876)['Adventures of Huckleberry Finn'](1884)['A Connecticut Yankee in King Arthur\'s Court'](1889)['The Prince and the Pauper'](1881))
  console.log($['Emily Brontë']('works')['Wuthering Heights'](1847)['Poems by Currer,Ellis,and Acton Bell'](1846))
})
