// CSS
import "./Albums.css";
import '../songs/Songs.css'
// Import other files and hooks

const object_block = [
  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },

  {
    id: 1,
    img: 'https://via.placeholder.com/200x200',
    artist: 'Neffex',
    song_name: 'Cold',
  },
]

const AlbumsItem = () => {
  return (
    <>
    <h1 className="title">Albums</h1>
    <div className="albums__block">
        {
          object_block.map((item) => (
              <div key={item.id} className="block">
                <img
                  className="img"
                  src={item.img}
                  alt=""
                />
                <h4 className="songs__name">{item.artist}</h4>
                <p>{item.song_name}</p>
              </div>
          ))
        }
      </div>

      <div className="circle__down"></div>
    </>
  );
};

export default AlbumsItem;
