function openBox() {
    console.log('Box clicked');
    // 버튼 숨기기
    document.getElementById('buttons').classList.add('hidden');

    // 상자 열기 애니메이션을 시작
    document.getElementById('box').style.backgroundImage = "url('images/box_animation.gif')";
    console.log('Animation started');

    // 애니메이션이 끝난 후 다른 페이지로 리디렉션
    setTimeout(function() {
        console.log('Redirecting to another page');
        window.location.href = 'newpage.html'; // 새로운 페이지로 리디렉션
    }, 5000); // 애니메이션 길이에 맞춰 타이머 조정 (여기서는 5초로 설정)
}

function openMultipleBoxes() {
    console.log('Open multiple boxes clicked');
    // 버튼 숨기기
    document.getElementById('buttons').classList.add('hidden');

    // 여러 상자 열기 애니메이션을 시작 (애니메이션 변경 가능)
    document.getElementById('box').style.backgroundImage = "url('images/box_animation.gif')";
    console.log('Animation started');

    // 애니메이션이 끝난 후 다른 페이지로 리디렉션
    setTimeout(function() {
        console.log('Redirecting to another page');
        window.location.href = 'newpage.html'; // 새로운 페이지로 리디렉션
    }, 5000); // 애니메이션 길이에 맞춰 타이머 조정 (여기서는 5초로 설정)
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');
});













