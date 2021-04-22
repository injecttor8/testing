import Head from 'next/head'
import Link from 'next/Link'

const Home = () =>{
  return(
    <main>
      {/* header */}
      <div class="head">
        <a style={{fontSize:'20px'}}>Beranda</a>
        <a>Penerimaan Peserta Didik Baru</a>
        <a1>Home</a1>
      </div>

      {/* content 1 */}
      <div class = "grid-container"> 
        <div class="column" style={{backgroundColor :'grey'}}>
          <div style={{height:'50px'}}>
            <p>DAFTAR FORMULIR</p>
            <p>****</p>
          </div>
          <div style={{height:'10px'}}>
            <p>More Info</p>
          </div>
        </div>
        <div class="column" style={{backgroundColor :'green'}}>
          <div style={{height:'50px'}}>
            <p>PEMBAYARAN FORMULIR</p>
            <p>****</p>
          </div>
          <div style={{height:'10px'}}>
            <p>More Info</p>
          </div>
        </div>
        <div class="column" style={{backgroundColor :'orange'}}>
          <div style={{height:'50px'}}>
            <p>SELEKSI KELULUSAN</p>
            <p>****</p>
          </div>
          <div style={{height:'10px'}}>
            <p>More Info</p>
          </div>
        </div>
        <div class="column" style={{backgroundColor :'blue'}}>
          <div style={{height:'50px'}}>
            <p>DAFTAR ULANG</p>
            <p>****</p>
          </div>
          <div style={{height:'10px'}}>
            <p>More Info</p>
          </div>
        </div>
        <div class="column" style={{backgroundColor :'red'}}>
        <div style={{height:'50px'}}>
          <p>LAPORAN PEMBELIAN</p>
            <p>****</p>
          </div>
          <div style={{height:'10px'}}>
            <p>More Info</p>
          </div>
        </div>
        <div class="column" style={{backgroundColor :'purple'}}>
        <div style={{height:'50px'}}>
          <p>KIRIM SMS</p>
            <p>****</p>
          </div>
          <div style={{height:'10px'}}>
            <p>More Info</p>
          </div>
        </div>
      </div>


      {/* content 2 */}
      <div class="top">
        <p>Informasi Gelombang Pendaftaran</p>
        <table>
          <tr>
          <th>No</th>
          <th>Nama Gelombang</th>
          <th>Tanggal Mulai</th>
          <th>Tanggal Berakhir</th>
          </tr>

          <tr>
            <td>1</td>
            <td>GELOMBANG 1 TAHAP 1</td>
            <td>2020-08-24</td>
            <td>2020-09-24</td>
          </tr>
          <tr>
            <td>2</td>
            <td>GELOMBANG 2</td>
            <td>2020-12-01</td>
            <td>2021-02-13</td>
          </tr>
          <tr>
            <td>3</td>
            <td>GELOMBANG 1 TAHAP 2</td>
            <td>2020-09-25</td>
            <td>2020-11-30</td>
          </tr>
        </table>
      </div>

      <br></br>
      {/* content 3 */}
      <div class="row">
        <div class ="columnt" id="top1" style={{float:'left'}}>
          <p>Rekap Pendaftaran Per Gelombang</p>
          <table>
            <tr>
              <th>No</th>
              <th>Nama Gelombang</th>
              <th>Jalur Pendaftaran</th>
              <th>Total Pendaftar</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Gelombang 1 Tahap 1</td>
              <td>BOARDING</td>
              <td>27</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gelombang 1 Tahap 1</td>
              <td>FULLDAY</td>
              <td>16</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gelombang 1 Tahap 2</td>
              <td>BOARDING</td>
              <td>32</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Gelombang 1 Tahap 2</td>
              <td>FULLDAY</td>
              <td>29</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Gelombang 2</td>
              <td>BOARDING</td>
              <td>30</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Gelombang 2</td>
              <td>FULLDAY</td>
              <td>22</td>
            </tr>
          </table>
        </div>

        <div class="columnt" id ="top2" style={{float:'right'}}>
          <p>Rekap Pendaftaran Lulus Seleksi</p>
          <table>
            <tr>
              <th>No</th>
              <th>Nama Gelombang</th>
              <th>Jalur Pendaftaran</th>
              <th>Total Pendaftar</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Gelombang 1 Tahap 1</td>
              <td>BOARDING</td>
              <td>27</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gelombang 1 Tahap 1</td>
              <td>FULLDAY</td>
              <td>16</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gelombang 1 Tahap 2</td>
              <td>BOARDING</td>
              <td>32</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Gelombang 1 Tahap 2</td>
              <td>FULLDAY</td>
              <td>29</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Gelombang 2</td>
              <td>BOARDING</td>
              <td>30</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Gelombang 2</td>
              <td>FULLDAY</td>
              <td>22</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
    
    
  )
}
export default Home;  