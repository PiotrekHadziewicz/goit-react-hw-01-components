export const App = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101'
      }}
    >
      {props.children}
    </div>
  );
};
