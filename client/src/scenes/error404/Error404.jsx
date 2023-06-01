import React from "react";
import "./404.css";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  return (
    <div id="error">
      <div class="container-error container-star">
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-1"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
        <div class="star-2"></div>
      </div>
      <div class="container container-bird">
        <div class="bird bird-anim">
          <div class="bird-container">
            <div class="wing wing-left">
              <div class="wing-left-top"></div>
            </div>
            <div class="wing wing-right">
              <div class="wing-right-top"></div>
            </div>
          </div>
        </div>
        <div class="bird bird-anim">
          <div class="bird-container">
            <div class="wing wing-left">
              <div class="wing-left-top"></div>
            </div>
            <div class="wing wing-right">
              <div class="wing-right-top"></div>
            </div>
          </div>
        </div>
        <div class="bird bird-anim">
          <div class="bird-container">
            <div class="wing wing-left">
              <div class="wing-left-top"></div>
            </div>
            <div class="wing wing-right">
              <div class="wing-right-top"></div>
            </div>
          </div>
        </div>
        <div class="bird bird-anim">
          <div class="bird-container">
            <div class="wing wing-left">
              <div class="wing-left-top"></div>
            </div>
            <div class="wing wing-right">
              <div class="wing-right-top"></div>
            </div>
          </div>
        </div>
        <div class="bird bird-anim">
          <div class="bird-container">
            <div class="wing wing-left">
              <div class="wing-left-top"></div>
            </div>
            <div class="wing wing-right">
              <div class="wing-right-top"></div>
            </div>
          </div>
        </div>
        <div class="bird bird-anim">
          <div class="bird-container">
            <div class="wing wing-left">
              <div class="wing-left-top"></div>
            </div>
            <div class="wing wing-right">
              <div class="wing-right-top"></div>
            </div>
          </div>
        </div>
        <div class="container-title">
          <div class="title">
            <div class="number">4</div>
            <div class="moon">
              <div class="face">
                <div class="mouth"></div>
                <div class="eyes">
                  <div class="eye-left"></div>
                  <div class="eye-right"></div>
                </div>
              </div>
            </div>
            <div class="number">4</div>
          </div>
          <div class="subtitle">
            Oops. Görünüşe göre yanlış bir yola sapmışsın.
          </div>
          <button className="error-btn" onClick={() => navigate(-1)}>
            Geri dön
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error404;
