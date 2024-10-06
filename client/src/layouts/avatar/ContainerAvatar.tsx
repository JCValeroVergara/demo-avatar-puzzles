import { useState } from 'react';
import { ButtonNext, ButtonOptionNav, ButtonPrev } from '../../components';
// import { AvatarContext } from '../../common/context/AvatarContext';
import { CloseX, CloseXClick, CloseXHover } from '../../icons';


export const ContainerAvatar = () => {
    // const { avatarState, setAvatarState } = useContext(AvatarContext);
    // const { ActiveForm, setActiveForm } = useContext(AvatarContext);
    const [FormRender, setFormRender] = useState('CustomBody');
    const [ isClickedClose, setIsClickedClose ] = useState(false);

    const handleCloseClick = () => {
      setIsClickedClose(true);
  };
  
  const handleNextClick = () => {
    if (FormRender === 'CustomBody') {
      setFormRender('CustomWardrobe');
    } else if (FormRender === 'CustomWardrobe') {
      setFormRender('CustomBody');
    }
  }

  const handlePrevClick = () => {
    if (FormRender === 'CustomWardrobe') {
      setFormRender('CustomBody');
    } else if (FormRender === 'CustomBody') {
      setFormRender('CustomWardrobe');
    }
  }

    return (
      <>
        <section className="flex flex-wrap fixed top-0 left-0 z-20 w-full h-full items-center justify-center bg-modal bg-opacity-30">
          <div className="flex flex-col flex-wrap w-full h-[90vh] items-center justify-center mx-[2vw] relative">
            <div className="w-full h-full flex flex-col border-[0.2vw] border-tableroborder items-center rounded-[0.7vw] relative bg-tablero">
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative w-2/5 h-full">
                  {/* <Avatar /> */}
                  <div className="flex flex-row items-center w-full absolute md:bottom-6 bottom-1 px-4 md:px-8 z-50">
                    <div className="mr-auto">
                      <div className="w-[3vw] h-[3vw] flex justify-star items-center p-[0.2vw]">
                        <ButtonOptionNav onClick={handleCloseClick}>
                          {(isHovered) => {
                            if (isClickedClose) {
                              return <CloseXClick />;
                            } else if (isHovered) {
                              return <CloseXHover />;
                            } else {
                              return <CloseX />;
                            }
                          }}
                        </ButtonOptionNav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col items-center w-3/5 h-full px-2 py-10">
                  {/* {ActiveForm === 'FormName' && <RegisterFormName />} */}
                  {/* {FormRender === 'CustomBody' && <AvatarCustomBody />}
                  {FormRender === 'CustomWardrobe' && <AvatarCustomWardrobe />} */}

                  <div className="flex flex-row items-center w-full absolute md:bottom-6 bottom-1 px-2 md:px-4">
                    {FormRender !== 'CustomBody' && (
                      <div className="mr-auto">
                        <ButtonPrev onClick={handlePrevClick} />
                      </div>
                    )}
                    <div className="ml-auto">
                      <ButtonNext onClick={handleNextClick} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

