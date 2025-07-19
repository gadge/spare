import { test }    from 'node:test'
import { $, says } from '../index.js'

test('writer works - says', () => {
  says['Charles Dickens']($['Oliver Twist'](1838)['A Christmas Carol'](1843)['David Copperfield'](1850)['Great Expectations'](1861)['Bleak House'](1853))
  says['Leo Tolstoy']($['War and Peace'](1869)['Anna Karenina'](1877)['The Death of Ivan Ilyich'](1886)['Resurrection'](1899))
  says['Herman Melville']($['Moby-Dick'](1851)['Bartleby,the Scrivener'](1853)['Billy Budd,Sailor'](1924))
  says['Franz Kafka']($['The Metamorphosis'](1915)['The Trial'](1925)['The Castle'](1926))
  says['Jane Austen']($['Pride and Prejudice'](1813)['Sense and Sensibility'](1811)['Emma'](1815)['Persuasion'](1818))
  says['García Márquez']($['One Hundred Years of Solitude'](1967)['Love in the Time of Cholera'](1985)['Chronicle of a Death Foretold'](1981))
  says['Scott Fitzgerald']($['The Great Gatsby'](1925)['Tender Is the Night'](1934)['This Side of Paradise'](1920))
  says['George Orwell']($['1984'](1949)['Animal Farm'](1945)['Homage to Catalonia'](1938)['Down and Out in Paris and London'](1933))
  says['Honoré de Balzac']($['Père Goriot'](1835)['Eugénie Grandet'](1833)['Lost Illusions'](1837)['Cousin Bette'](1846))
  says['Fyodor Dostoevsky']($['Crime and Punishment'](1866)['The Brothers Karamazov'](1880)['The Idiot'](1869)['Notes from Underground'](1864))
  says['Virginia Woolf']($['Mrs. Dalloway'](1925)['To the Lighthouse'](1927)['Orlando'](1928)['A Room of One\'s Own'](1929))
  says['Marcel Proust']($['In Search of Lost Time'](1913)['Within a Budding Grove'](1919)['The Guermantes Way'](1920))
  says['Mark Twain']($['The Adventures of Tom Sawyer'](1876)['Adventures of Huckleberry Finn'](1884)['A Connecticut Yankee in King Arthur\'s Court'](1889)['The Prince and the Pauper'](1881))
  says['Emily Brontë']($['Wuthering Heights'](1847)['Poems by Currer,Ellis,and Acton Bell'](1846))
})
