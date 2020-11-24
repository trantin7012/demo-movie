import React from 'react'

export default function News() {
    return (
        
            <div id="news" className="container news">
                <div className="text-center pt-4">
                    <div className="news__title">
                        <h1>Tin Tức Và Sự Kiện</h1>
                        
                        <div className="news__title-line mt-4 mb-5" />
                    </div>
                </div>
                <div className="news__body mb-5">
                    <div className="news__content row mb-5">
                        <div className="news__img  col-md-5 col-sm-6 pr-4">
                            <img src="../img/home/matbiec.jpg" alt className="img-fluid" />
                        </div>
                        <div className="news__body-text col-md-7 col-sm-6">
                            <h5><a href="#">Ra mắt phim Mắt Biếc</a></h5>
                            <h6>29/01/2017</h6>
                            <p>Mắt biếc (tựa tiếng Anh: Dreamy Eyes) là một phim điện ảnh Việt Nam do Victor Vũ đạo diễn[2], chuyển thể từ truyện dài cùng tên của nhà văn Nguyễn Nhật Ánh[3]. Phim ra mắt vào ngày 20 tháng 12 năm 2019. Đây là bộ phim thứ hai của Victor Vũ đạo diễn dựa trên truyện dài của Nguyễn Nhật Ánh sau thành công từ phim Tôi thấy hoa vàng trên cỏ xanh năm 2015.
        </p>
                        </div>
                    </div>
                    <div className="news__content row pb-5">
                        <div className="news__body-text  col-md-7 col-sm-6 ">
                            <h5><a href="#">Gái già lắm chiêu</a></h5>
                            <h6>02/03/2345</h6>
                            <p>Review nóng Gái Già Lắm Chiêu 3: xa hoa trong từng khung hình, không drama như trailer, cảnh giống Crazy Rich Asians đã bị cắt!
        </p>
                        </div>
                        <div className="news__img col-md-5 col-sm-6">
                            <img src="../img/home/gaigia.png" alt className="img-fluid " />
                        </div>
                    </div>
                </div>
            </div>
    )
}
